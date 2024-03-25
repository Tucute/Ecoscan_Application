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
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import ItemShop from '../component/ItemShop';
import ItemDetail from '../component/ItemDetail';
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

  const Compare = (navigaiton: any, data: Item) => {
    const item1: Item = itemProduct.data;
    const item2 = data;
    const item = {
      item1: item1,
      item2: item2,
    };
    navigaiton.navigate('Compare', {item});
  };
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
        <Text style={styles.nameProduct}>{itemProduct.data.name}</Text>
        <Text style={styles.ingredient}>{itemProduct.data.ingredient}</Text>
        <Text style={styles.price}>
          {itemProduct.data.shopsData[0].price} VND
        </Text>
        <View style={styles.viewRecommentStore}>
          <Text style={styles.price}>On sale in stores: </Text>
          <ItemShop dataShop={stores} navigation={navigation} />
        </View>
      </View>
      <View style={styles.titleList}>
        <Text style={styles.textTitleList}>Similar products</Text>
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
              <Text style={styles.textBtn}>Compare</Text>
            </TouchableOpacity>
            <Image
              style={styles.imageItem}
              source={{
                uri: item.image[0].url,
              }}
            />
            <View style={styles.viewInfoItem}>
              <Text numberOfLines={1} style={styles.nameItem}>
                {item.name}
              </Text>
              <Text numberOfLines={2} style={styles.manufacturer}>
                Manufacturer: {item.manufacturer}
              </Text>
              <Text style={styles.priceItem}>
                {item.shopsData[0].price} VND
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
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
    marginHorizontal: 15,
  },
  nameProduct: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  ingredient: {
    color: '#fff',
    marginVertical: 10,
  },
  price: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
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
  },
  item: {
    width: '40%',
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
    objectFit: 'cover',
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
});
export default DetailProduct;
