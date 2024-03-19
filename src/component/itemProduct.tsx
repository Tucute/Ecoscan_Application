import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
interface Product {
  _id: string;
  barcode_number: number;
  image: {
    _id: string;
    url: string;
  } [];
  price: 5;
  ingredient: string;
  name: string;
  subCategoryId: string;
}
interface Item {
  dataProductShop: Product;
}
const ItemProduct = ({dataProductShop}: Item) => {
  return (
    <View style={styles.item}>
      <Image
        style={styles.imageItem}
        source={{
          uri: dataProductShop.image[0].url
        }}
      />
      <View style={styles.viewInfoItem}>
        <Text style={styles.nameItem}>{dataProductShop.name}</Text>
        <Text numberOfLines={2} style={styles.originItem}>
          {dataProductShop.ingredient}
        </Text>
        <Text style={styles.priceItem}>{dataProductShop.price} VND</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    marginTop: 10,
    backgroundColor: '#D9D9D9',
    borderRadius: 15,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageItem: {
    width: 100,
    height: 100,
    borderRadius: 15,
    objectFit: 'cover',
  },
  viewInfoItem: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '65%',
    height: 'auto',
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 4,
    marginLeft: 5,
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
});
export default ItemProduct;
