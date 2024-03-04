import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
interface DataProps {
  name: string;
  image: any;
  fllowing: number;
  fllower: number;
  title: string;
}

export default function ItemStore() {
  return (
    <View style={styles.container}>
      <Image 
      style={styles.shopImage}
      source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn9074C2QHyTBRUNU945Drqz0rc8pDjSaN-A&usqp=CAU'}}></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
  },
  shopImage: {
    width: "100%",
    height: "100%"
  },
});
