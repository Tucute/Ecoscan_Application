import React, {useRef, useState} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  Dimensions,
  TouchableOpacity,
  FlatList,
  ScrollView,
  ImageBackground,
  Alert,
  ActivityIndicator,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import ItemShop from '../component/ItemShop';
import ItemDetail from '../component/ItemDetail';
import {Url} from '../url/Url';
import axios from 'axios';
import Geolocation from '@react-native-community/geolocation';
interface ImageSource {
  _id: string;
  url: string;
}
interface Item {
  _id: string;
  barcode_number: number;
  image: ImageSource[];
  price: 5;
  ingredient: string;
  name: string;
  nutriScore: string;
  subCategoryId: string;
  manufacturer: string;
  shopsData: Shop[];
}
interface Shop {
  _id: string;
  shopName: string;
  phone: number;
  address: string;
  latitude: number;
  longitude: number;
  price: string;
}
interface ItemImage {
  id: string;
  url: string;
}

const DetailProduct = ({navigation, route}: any) => {
  const [itemProduct, setItemProduct] = useState(route.params.data);
  const stores: Shop[] = itemProduct.data.shopsData;
  const itemImage: ItemImage[] = itemProduct.data.image;
  const listItem: Item[] = itemProduct.relatedProduct;
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const sendRequest = async (item: any) => {
    try {
      const res = await axios.post(`${Url}/product/compareProducts`, item);
      if (res.status === 200) {
        const data = res.data;
        setIsLoading(false);
        navigation.navigate('Compare', {data});
      }
    } catch (error) {
      setIsLoading(false);
      setIsError(true),
      console.log(error);
    }
  };

  const Compare = async ({navigation}: any, data: Item) => {
    setIsLoading(true);
    const product1: Item = itemProduct.data;
    const product2 = data;
    Geolocation.getCurrentPosition(
      (info: any) => {
        const {latitude, longitude} = info.coords;
        console.log(latitude, longitude);
        const item = {
          latitude: latitude,
          longitude: longitude,
          product1: product1,
          product2: product2,
        };
        sendRequest(item);
      },
      (error: any) => Alert.alert('Error', error.message),
      {enableHighAccuracy: false, setTimeout: 3000, maximumAge: 10000},
    );
  };

  if (isLoading) {
    return (
      <View style={styles.containerLoading}>
        <ActivityIndicator size="large" color="#00ff00" />
        <Text>isLoading...</Text>
      </View>
    );
  }
  if (isError) {
    return (
      <View style={styles.containerLoading}>
        <Image
            style={styles.imgNoResult}
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/6134/6134065.png',
            }}
          />
          <Text>Đã xảy ra lỗi! Vui lòng thử lại</Text>
      </View>
    );
  }
  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity
        style={styles.iconBack}
        onPress={() => navigation.goBack()}>
        <Image
          source={require('../assets/CompareInterface-icon/Iconback.png')}></Image>
      </TouchableOpacity>
      <ItemDetail itemImage={itemImage} />
      <View style={styles.viewDetail}>
        <Text numberOfLines={2} style={styles.nameProduct}>{itemProduct.data.name}</Text>
        <Text style={styles.ingredient}>{itemProduct.data.ingredient}</Text>
        <Text style={styles.price}>
          {itemProduct.data.shopsData[0]?.price
            ? itemProduct.data.shopsData[0].price
            : null}{' '}
          VND
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 14}}>
            Nutri Score:{' '}
          </Text>
          {itemProduct.data.nutriScore === 'A' && (
            <Image
            style={{width: 80, height: 40, objectFit: 'contain'}}
              key="nutri-score-a"
              source={require('../assets/svgtopng/nutriscore-a.png')}
            />
          )}
          {itemProduct.data.nutriScore === 'B' && (
            <Image
            style={{width: 80, height: 40, objectFit: 'contain'}}
              key="nutri-score-b"
              source={require('../assets/svgtopng/nutriscore-b.png')}
            />
          )}
          {itemProduct.data.nutriScore === 'C' && (
            <Image
            style={{width: 80, height: 40, objectFit: 'contain'}}
              key="nutri-score-c"
              source={require('../assets/svgtopng/nutriscore-c.png')}
            />
          )}
          {itemProduct.data.nutriScore === 'D' && (
            <Image
            style={{width: 80, height: 40, objectFit: 'contain'}}
              key="nutri-score-d"
              source={require('../assets/svgtopng/nutriscore-d.png')}
            />
          )}
          {itemProduct.data.nutriScore === 'E' && (
            <Image
            style={{width: 80, height: 40, objectFit: 'contain'}}
              key="nutri-score-e"
              source={require('../assets/svgtopng/nutriscore-e.png')}
            />
          )}
        </View>
        <View style={styles.viewRecommentStore}>
          <Text style={styles.price}>Đang bán tại: </Text>
          <ItemShop dataShop={stores} navigation={navigation} />
        </View>
      </View>
      <View style={styles.titleList}>
        <Text style={styles.textTitleList}>Các sản phẩm tương tự khác</Text>
      </View>

      <View style={styles.viewSimilarProduct}>
        {listItem.map(item => (
          <TouchableOpacity
            key={item._id}
            style={styles.item}
            onPress={() => Compare(navigation, item)}>
            <TouchableOpacity
              style={styles.btnCompare}
              onPress={() => Compare(navigation, item)}>
              <Text style={styles.textBtn}>So sánh</Text>
            </TouchableOpacity>
            <Image
              style={styles.imageItem}
              source={{
                uri: item.image[0].url,
              }}
            />
            <View style={styles.viewInfoItem}>
              <Text numberOfLines={2} style={styles.nameItem}>
                {item.name}
              </Text>
              <Text numberOfLines={2} style={styles.manufacturer}>
                Manufacturer: {item.manufacturer}
              </Text>
              <Text style={styles.priceItem}>
                {item.shopsData[0]?.price} VND
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  containerLoading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    backgroundColor: '#333333',
  },

  iconBack: {
    justifyContent: 'flex-start',
    width: '100%',
    marginTop: 10,
    marginLeft: 20,
  },
  viewDetail: {
    marginHorizontal: 20,
  },
  nameProduct: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  ingredient: {
    color: '#fff',
    fontSize: 12,
    textAlign: 'justify',
    marginVertical: 10,
  },
  price: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  viewRecommentStore: {
    // justifyContent: 'space-between',
  },
  storeName: {
    color: 'blue',
    fontSize: 12,
  },
  titleList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20,
  },
  textTitleList: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  textTitleSoft: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    paddingRight: 10,
  },
  viewDropdown: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewSimilarProduct: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginHorizontal: 10,
  },
  item: {
    width: '45%',
    backgroundColor: '#D9D9D9',
    borderRadius: 15,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  imageItem: {
    width: '100%',
    height: 120,
    borderRadius: 15,
    objectFit: 'contain',
  },
  viewInfoItem: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 'auto',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginTop: 3,
    paddingHorizontal: 5,
    bottom: -5,
  },
  nameItem: {
    fontSize: 12,
    color: '#000',
    fontWeight: 'bold',
    paddingTop: 5,
  },
  originItem: {
    color: '#000',
  },
  manufacturer: {
    textAlign: 'center',
    fontSize: 12,
    color: '#000',
  },
  priceItem: {
    color: '#000',
    fontSize: 12,
    fontWeight: '700',
  },
  btnCompare: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#201DAE',
    paddingHorizontal: 5,
    borderRadius: 6,
    left: '25%',
    marginBottom: 10,
  },
  textBtn: {
    color: '#fff',
    padding: 1,
  },
  emptyProduct: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  imgNoResult: {
    width: 100,
    height: 100,
    objectFit: 'contain',
    marginBottom: 20,
  },
});
export default DetailProduct;
