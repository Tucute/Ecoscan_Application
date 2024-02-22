import React, {useRef} from 'react';
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
  name: string;
  image: string;
}
const {width} = Dimensions.get('window');

const DetailProduct = () => {
  const data = [
    {
      name: 'vinamilk',
      image:
        'https://www.moby.com.vn/data/bt6/sua-tuoi-tiet-trung-vinamilk-100-co-duong-hop-giay-1l-1630061314.jpg',
    },
    {
      name: 'youmost',
      image:
        'https://www.lottemart.vn/media/catalog/product/cache/0x0/8/9/8934841902846.jpg.webp',
    },
  ];

  const listItem = [
    {
      id: 1,
      name: 'vinamilk',
      origin: 'Hà Lan',
      price: 20000,
      image: require('../assets/image/vinamilk.png'),
    },
    {
      id: 2,
      name: 'youmost',
      origin: 'Viet Nam',
      price: 18000,
      image: require('../assets/image/vinamilk.png'),
    },
    {
      id: 3,
      name: 'vinamilk',
      origin: 'Hà Lan',
      price: 12000,
      image: require('../assets/image/vinamilk.png'),
    },
    {
      id: 4,
      name: 'youmost',
      origin: 'Viet Nam',
      price: 18000,
      image: require('../assets/image/vinamilk.png'),
    },
  ];
  const carouselRef = useRef<Carousel<Item>>(null);

  return (
    <View style={styles.container}>
      <Carousel
        data={data}
        renderItem={({item}) => (
          <View style={styles.viewImage}>
            <Image
              source={{uri: item.image}}
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
        <Text style={styles.nameProduct}>Sữa tươi vinamilk</Text>
        <Text style={styles.ingredient}>
          Thành phần: Sữa tươi nguyên chất: 95,9% Đường tinh luyện: 3,8% Chất ổn
          định (471, 460(i), 407, 466) Vitamin (natri ascorbat, A, D3) Khoáng
          chất (natri selenit)
        </Text>
        <Text style={styles.price}>32.000 đ</Text>
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
        {/* <View style={styles.listSimilarProduct}>
          <View style={styles.item}>
            <TouchableOpacity style={styles.btnCompare}>
              <Text style={styles.textBtn}>Compare</Text>
            </TouchableOpacity>
            <Image
              style={styles.imageItem}
              source={require('../assets/image/vinamilk.png')}
            />
            <View style={styles.viewInfoItem}>
              <Text style={styles.nameItem}>Vinamilk</Text>
              <Text style={styles.originItem}>Origin: Viet Nam</Text>
              <Text style={styles.priceItem}>20000 VND</Text>
            </View>
          </View>
          <View style={styles.item}>
            <TouchableOpacity style={styles.btnCompare}>
              <Text style={styles.textBtn}>Compare</Text>
            </TouchableOpacity>
            <Image
              style={styles.imageItem}
              source={require('../assets/image/vinamilk.png')}
            />
            <View style={styles.viewInfoItem}>
              <Text style={styles.nameItem}>Vinamilk</Text>
              <Text style={styles.originItem}>Origin: Hà Lan</Text>
              <Text style={styles.priceItem}>20000 VND</Text>
            </View>
          </View>
        </View> */}
        <FlatList
          contentContainerStyle={styles.listSimilarProduct}
          numColumns={2}
          data={listItem}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <View style={styles.item}>
              <TouchableOpacity style={styles.btnCompare}>
                <Text style={styles.textBtn}>Compare</Text>
              </TouchableOpacity>
              <Image style={styles.imageItem} source={item.image} />
              <View style={styles.viewInfoItem}>
                <Text style={styles.nameItem}>{item.name}</Text>
                <Text style={styles.originItem}>Origin: {item.origin}</Text>
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
    flex: 1,
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
