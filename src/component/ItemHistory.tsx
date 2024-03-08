import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import useGetProduct from '../hook/useGetProduct';
import useDeleteHistory from '../hook/useDeleteHistory';
import itemProduct from './itemProduct';

interface History {
  historyId: string;
  userId: string;
  barcode_number: string;
  productData: {
    _id: string;
    barcode_number: number;
    price: number;
    subCategoryId: string;
    name: string;
    image: [
      {
        _id: string;
        url: string;
      },
    ];
  };
  create_at: string;
}

interface Item {
  data: History;
  navigation: any;
  method: () => void;
}
const ItemHistory = ({method, data, navigation}: Item) => {
  const {handleBarcode} = useGetProduct({navigation});

  const getDetail = () => {
    const data = {barcodeNumber: 8935005801029};
    handleBarcode(data);
  }
  return (
    <TouchableOpacity key={data.historyId} style={styles.viewItem} onPress={getDetail}>
      <Image
        style={styles.iconQrCode}
        source={{uri: 'https://cdn-icons-png.flaticon.com/512/1233/1233234.png'}}
      />
      <View style={styles.viewInfo}>
        <Text style={styles.name} numberOfLines={1}>{data.productData.name}</Text>
        <Text style={styles.barCode}>{data.productData.barcode_number}</Text>
      </View>
      <View style={styles.viewTime}>
        <TouchableOpacity style={styles.btnDelete} onPress={method}>
          <Image source={require('../assets/iconGeneral/IconDelete.png')} />
        </TouchableOpacity>
        <Text style={styles.time}>{data.create_at}</Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  viewItem: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#333333',
    borderRadius: 10,
    marginBottom: 15,
    marginHorizontal: 20,
  },
  iconQrCode: {
    flex: 1,
    width: 30,
    height: 30,
  },
  viewInfo: {
    marginLeft: 5,
    flex: 3,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  name: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  barCode: {
    color: '#A4A4A4',
    fontSize: 11,
  },
  viewTime: {
    flex: 4,
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  btnDelete: {
    padding: 2,
    marginBottom: 5,
  },
  time: {
    color: '#A4A4A4',
    fontSize: 12,
  },
});
export default ItemHistory;
