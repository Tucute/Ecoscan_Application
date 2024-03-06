import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
interface Product {
    _id: string;
    barcode_number: number;
    image: Image[];
    price: 5;
    ingredient: string;
    name: string;
    subCategoryId: string;
    origin: string;
  }
interface Item {
    item: Product;
}
const itemProduct = ({item}: Item) => {
    return (
        <View style={styles.item}>
              <TouchableOpacity style={styles.btnCompare} onPress={() => Compare(navigation, item)}>
                <Text style={styles.textBtn}>Compare</Text>
              </TouchableOpacity>
              <Image style={styles.imageItem} source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6VTfyJC1TR_CSoCs22ivd2eT5ZI3U7Qt8tw&usqp=CAU'}} />
              <View style={styles.viewInfoItem}>
                <Text style={styles.nameItem}>{item.name}</Text>
                <Text numberOfLines={2} style={styles.originItem}>{item.ingredient}</Text>
                <Text style={styles.priceItem}>{item.price} VND</Text>
              </View>
            </View>
    );
};

const styles = StyleSheet.create({
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
        width: 120,
        height: 120,
        borderRadius: 15,
        objectFit: 'cover',
      },
      viewInfoItem: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 150,
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
})
export default itemProduct;