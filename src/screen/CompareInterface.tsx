import {
  Image,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import PriceProductCompare from '../component/ComponentCompare/PriceProductCompare';
import InfoProduct from '../component/ComponentCompare/InfoProduct';
import SimilarStore from '../component/ComponentCompare/SimilarStore';
import TheOrigin from '../component/ComponentCompare/TheOrigin';

const CompareInterface = ({ navigation, route }: any) => {
  const item = route.params.item;
  return (
    <ScrollView style={styles.container}>
      <View style={styles.componentCompare}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require('../assets/CompareInterface-icon/Iconback.png')}></Image>
        </TouchableOpacity>
        <View style={styles.imageCompare}>
          <View style={styles.firstProduct}>
            <Image
              style={styles.componentImage}
              source={{ uri: item.item1.image[0].url }}></Image>
            <TouchableOpacity style={styles.componentText} onPress={() => navigation.navigate('Recycle')}>
              <Text style={styles.text}>Choose</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.secondProduct}>
            <Image
              style={styles.componentImage}
              source={{ uri: item.item2.image[0].url }}></Image>
            <TouchableOpacity style={styles.componentText} onPress={() => navigation.navigate('Recycle')}>
              <Text style={styles.text}>Choose</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.componentDetail}>
        <View style={styles.firstProductDetail}>
          <Image
            style={{ width: 50, height: 50, marginTop: 20, marginLeft: 50, borderRadius: 15, objectFit: 'contain' }}
            source={{ uri: item.item1.image[0].url }}></Image>
          <Text numberOfLines={1} style={styles.leftProductlText}>{item.item1.name}</Text>
          <View>
            <PriceProductCompare price={item.item1.shopsData[0].price} />
          </View>
          <View style={styles.infoProduct}>
            <InfoProduct ingredient={item.item1.ingredient} />
          </View>
          <View>
            <TheOrigin manufacturer={item.item1.manufacturer}/>
          </View>
          <View>
            <SimilarStore key={item.item1._id} data={item.item1.shopsData} navigation={navigation} />
          </View>
        </View>
        <View style={styles.secondProductDetail}>
          <Image
            style={{ width: 40, height: 50, marginTop: 20, marginHorizontal: 50 }}
            source={{ uri: item.item2.image[0].url }}></Image>
          <Text numberOfLines={1} style={styles.rightProductText}>{item.item2.name}</Text>
          <View>
            <PriceProductCompare price={item.item2.shopsData[0].price} />
          </View>
          <View style={styles.infoProduct}>
            <InfoProduct ingredient={item.item2.ingredient} />
          </View>

          <View>
            <TheOrigin manufacturer={item.item2.manufacturer}/>
          </View>
          <View>
            <SimilarStore key={item.item2._id} data={item.item2.shopsData} navigation={navigation} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
  },
  componentCompare: {
    backgroundColor: 'white',
    marginHorizontal: 20,
    marginTop: 20,
    height: 280,
    borderRadius: 15,
  },
  componentText: {
    backgroundColor: '#B2CA1F',
    justifyContent: 'center',
    width: 75,
    height: 30,
    borderRadius: 10,
    margin: 20,
  },
  imageCompare: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  componentImage: {
    borderRadius: 15,
    width: 100,
    height: 120,
    objectFit: 'cover',
  },
  firstProductDetail: {
    flex: 1,
    borderRightWidth: 1,
    borderColor: '#BA8F8F',
  },
  secondProductDetail: {
    flex: 1,
  },
  firstProduct: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
  iconCompare: {
    width: 100,
    height: 100,
  },
  secondProduct: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  secondImageText: {
    backgroundColor: '#B2CA1F',
    justifyContent: 'center',
    width: 75,
    height: 30,
    borderRadius: 10,
    marginVertical: 15,
  },
  componentDetail: {
    flex: 1,
    backgroundColor: 'white',
    marginHorizontal: 20,
    marginVertical: 20,
    borderRadius: 15,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  originText: {
    marginVertical: 10,
    marginHorizontal: 15,
  },
  leftProductlText: {
    color: '#000',
    fontWeight: 'bold',
    marginVertical: 10,
    marginHorizontal: 20,
  },
  rightProductText: {
    color: '#000',
    fontWeight: 'bold',
    marginVertical: 10,
    marginHorizontal: 20,
  },
  infoProduct: {
    minHeight: 450,
    maxHeight: 600,
  }
});

export default CompareInterface;
