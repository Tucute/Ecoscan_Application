import React, {useRef, useState} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  Dimensions,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';

interface Item {
  _id: string;
  barcode_number: number;
  image: Image[];
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
interface Data {
  data: Item;
  relatedProduct: Item[];
}
interface PropData {
  data: Data;
}

const {width} = Dimensions.get('window');

const DetailProduct = ({navigaiton, route}: any) => {
  const [item, setItem] = useState(route.params);
  const itemImage = item.data.data.image;
  const listItem = item.data.relatedProduct;
  const carouselRef = useRef<Carousel<ItemImage>>(null);

  return (
    <View style={styles.container}>
      <Carousel
        data={itemImage}
        renderItem={({item}) => (
          <View style={styles.viewImage}>
            <Image
              source={{uri: item.url}}
              style={styles.imgProduct}
              resizeMode="cover"
            />
          </View>
        )}
        ref={carouselRef}
        sliderWidth={width}
        itemWidth={width - 10}
        enableSnap
      />
      <View style={styles.viewDetail}>
        <Text style={styles.nameProduct}>{item.data.data.name}</Text>
        <Text style={styles.ingredient}>
          {item.data.data.ingredient}
        </Text>
        <Text style={styles.price}>{item.data.data.price} đ</Text>
      </View>
      <View style={styles.viewSimilarProduct}>
        <View style={styles.titleList}>
          <Text style={styles.textTitleList}>Similar products</Text>
          <View style={styles.viewDropdown}>
            <Text style={styles.textTitleSoft}>Soft by price</Text>
            <Image
              source={require('../assets/iconGeneral/chevron_down.png')}
              resizeMode="cover"
            />
          </View>
        </View>
        <FlatList
          contentContainerStyle={styles.listSimilarProduct}
          numColumns={2}
          data={listItem}
          keyExtractor={item => item._id}
          renderItem={({item}) => (
            <View style={styles.item}>
              <TouchableOpacity style={styles.btnCompare}>
                <Text style={styles.textBtn}>Compare</Text>
              </TouchableOpacity>
              <Image style={styles.imageItem} source={{uri: 'https://donchicken.vn/pub/media/catalog/product/cache/8872124951f387c8ded3f228faa55bea/a/q/aquafina_500ml.png'}} />
              <View style={styles.viewInfoItem}>
                <Text style={styles.nameItem}>{item.name}</Text>
                <Text style={styles.originItem}>{item.ingredient}</Text>
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
    backgroundColor: '#fff',
    borderRadius: 15,
    margin: 10,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgProduct: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    backgroundColor: 'red',
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
    // justifyContent: 'space-around',
    // alignItems: 'center',
    flex: 1,
    marginHorizontal: 10,
  },
  item: {
    backgroundColor: '#D9D9D9',
    borderRadius: 15,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    // flex: 1,
    marginHorizontal: 10,
  },
  imageItem: {
    width: 130,
    height: 130,
  },
  viewInfoItem: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 'auto',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginTop: 10,
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
    backgroundColor: '#201DAE',
    paddingHorizontal: 5,
    borderRadius: 10,
    left: 40,
    marginBottom: 5,
  },
  textBtn: {
    color: '#fff',
  },
});
export default DetailProduct;
