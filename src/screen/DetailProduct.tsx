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
  origin: string;
}
interface ItemImage {
  id: string;
  url: string;
}
const {width} = Dimensions.get('window');

const DetailProduct = ({navigation, route}: any) => {
  const [itemProduct, setItemProduct] = useState(route.params.data);
  const itemImage = itemProduct.data.image;
  const listItem: Item[] = itemProduct.relatedProduct;
  const carouselRef = useRef<Carousel<ItemImage>>(null);

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
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.iconBack}
        onPress={() => navigation.goBack()}>
        <Image
          source={require('../assets/CompareInterface-icon/Iconback.png')}></Image>
      </TouchableOpacity>
      <Carousel
        data={itemImage}
        renderItem={({item}) => (
          <View style={styles.viewImage}>
            <Image
              source={{uri: item.url}}
              style={styles.imgProduct}
              resizeMode="cover"></Image>
          </View>
        )}
        ref={carouselRef}
        sliderWidth={width}
        itemWidth={width - 20}
        enableSnap
      />
      <View style={styles.viewDetail}>
        <Text style={styles.nameProduct}>{itemProduct.data.name}</Text>
        <Text style={styles.ingredient}>{itemProduct.data.ingredient}</Text>
        <Text style={styles.price}>{itemProduct.data.price} VND</Text>
      </View>
      <View style={styles.titleList}>
        <Text style={styles.textTitleList}>Similar products</Text>
        {/* <View style={styles.viewDropdown}>
          <Text style={styles.textTitleSoft}>Soft by price</Text>
          <Image
            source={require('../assets/iconGeneral/chevron_down.png')}
            resizeMode="cover"
          />
        </View> */}
      </View>

      <View style={styles.viewSimilarProduct}>
        <FlatList
          contentContainerStyle={styles.listSimilarProduct}
          ListEmptyComponent={() => (
            <View style={styles.listSimilarProduct}>
              <Text style={styles.emptyProduct}>There are no related products</Text>
            </View>
          )}
          numColumns={2}
          data={listItem}
          keyExtractor={item => item._id}
          renderItem={({item}) => (
            <View style={styles.item}>
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
                <Text numberOfLines={1} style={styles.nameItem}>{item.name}</Text>
                {/* <Text numberOfLines={2} style={styles.originItem}>
                  {item.origin}
                </Text> */}
                <Text style={styles.priceItem}>{item.price} VND</Text>
              </View>
            </View>
          )}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333',
  },
  viewImage: {
    flex: 1,
    borderRadius: 15,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconBack: {
    justifyContent: 'flex-start',
    width: '100%',
    marginTop: 10,
    marginLeft: 20,
  },
  imgProduct: {
    borderRadius: 15,
    width: '100%',
    height: '100%',
    objectFit: 'contain',
    backgroundColor: '#fff',
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
    marginVertical: 10,
  },
  price: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  viewSimilarProduct: {
    flex: 1,
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
  listSimilarProduct: {
    flexDirection: 'column',
    flex: 1,
    marginHorizontal: 10,
    marginBottom: 10,
  },
  item: {
    width: 150,
    backgroundColor: '#D9D9D9',
    borderRadius: 15,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
    marginBottom: 15,
  },
  imageItem: {
    width: 120,
    height: 120,
    borderRadius: 15,
    objectFit: 'cover',
  },
  viewInfoItem: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 140,
    height: 'auto',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginTop: 3,
    paddingHorizontal: 5,
    bottom: -5,
  },
  nameItem: {
    fontSize: 16,
    color: '#000',
    fontWeight: 'bold',
    paddingTop: 5,
  },
  originItem: {
    color: '#000',
  },
  priceItem: {
    color: '#000',
    fontWeight: '700',
  },
  btnCompare: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#201DAE',
    paddingHorizontal: 5,
    borderRadius: 10,
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
