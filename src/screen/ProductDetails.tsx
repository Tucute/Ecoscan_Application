import {Image, View, Text, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';

interface Data {
  bardcode: string;
  category_id: number;
  id: number;
  image: string;
  ingredient: string;
  name: string;
  price: number;
}

const ProductDetails = ({route}: any) => {
  const {barcode} = route.params;
  const [data, setData] = useState<Data | null>(null);

  const getData = async () => {
    try {
      const res = await fetch(
        'https://6471cfab6a9370d5a41ab469.mockapi.io/Products/',
      );
      const value = await res.json();
      const product = findProduct(value, barcode);
      console.log(product);
      if (product) {
        setData(product);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const findProduct = (array: Data[], code: string) => {
    const found = array?.find(item => {
      return item.bardcode === code;
    });
    console.log(code);
    console.log('found=>', found);
    return found;
  };

  useEffect(() => {
    getData();
    console.log(data);
  }, [data, getData]);

  return (
    <View style={styles.container}>
      <Text>{barcode}</Text>
      {data ? (
        <>
          <Image source={{uri: data.image}} style={styles.image} />
          <Text>{data.name}</Text>
        </>
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
  },
  image: {
    width: 100, // Adjust the width based on your design
    height: 100, // Adjust the height based on your design
  },
});

export default ProductDetails;
