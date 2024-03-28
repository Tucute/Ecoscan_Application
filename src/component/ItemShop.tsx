import React from 'react';
import {
  ScrollView,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
interface Shop {
  _id: string;
  shopName: string;
  phone: number;
  address: string;
  latitude: number;
  longitude: number;
  price: string;
  logo: string;
}
interface ItemStores {
  dataShop: Shop[];
  navigation: any;
}
interface ItemShops {
  data: Shop;
}
export default function ItemShop({dataShop, navigation}: ItemStores) {
  const StoreItem = ({data}: ItemShops) => (
    <TouchableOpacity
      style={styles.itemShow}
      onPress={() => navigation.navigate('Store', {data})}>
      <Image
        style={styles.imageItem}
        source={{
          uri: data.logo,
        }}
      />
      <Text style={styles.name}>{data.shopName}</Text>
      <Text style={styles.price}>{data.price} VND</Text>
    </TouchableOpacity>
  );

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.container}>
      {dataShop.map((data: Shop, index: number) => (
        <StoreItem data={data} key={index.toString()} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 10,
    justifyContent: 'flex-start',
  },
  itemShow: {
    alignSelf: 'center',
    alignItems: 'center',
    padding: 10,
    minHeight: 100,
    borderRadius: 15,
    borderColor: '#F4F4F4',
    maxWidth: 160,
  },
  name: {
    textAlign: 'center',
    minWidth: 100,
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 5,
    color: '#fff',
  },
  imageItem: {
    width: 60,
    height: 60,
    marginBottom: 2,
    borderRadius: 50,
    objectFit: 'contain',
    backgroundColor: '#fff',
  },
  price: {
    color: '#fff',
    fontSize: 12,
  }
});
