import {
  Image,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Modal,
  Alert,
  Pressable,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import PriceProductCompare from '../component/ComponentCompare/PriceProductCompare';
import InfoProduct from '../component/ComponentCompare/InfoProduct';
import SimilarStore from '../component/ComponentCompare/SimilarStore';
import TheOrigin from '../component/ComponentCompare/TheOrigin';

const CompareInterface = ({navigation, route}: any) => {
  const [modalVisible, setModalVisible] = useState(false);
  const item = route.params.data.data;
  // const item = data.item;
  console.log(item);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                <View style={{left: 100, flexDirection:'row' ,alignItems: 'center'}}>
                <Image
                style={{width: 30, height: 30, marginBottom: 10}}
                  source={require('../assets/iconUploadImage/Icon-X.png')}></Image>
                  <Text style={{color: '#000', paddingLeft: 5}}>Đóng</Text>
                </View>
              </TouchableOpacity>
              <Text style={styles.modalText}>{item.betterProduct}</Text>
            </View>
          </View>
        </Modal>
      </View>
      <View style={styles.componentCompare}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require('../assets/CompareInterface-icon/Iconback.png')}></Image>
        </TouchableOpacity>
        <View style={styles.imageCompare}>
          <View style={styles.firstProduct}>
            <Image
              style={styles.componentImage}
              source={{uri: item.product1.image[0].url}}></Image>
            <TouchableOpacity
              style={styles.componentText}
              onPress={() => navigation.navigate('Recycle')}>
              <Text style={styles.text}>Choose</Text>
            </TouchableOpacity>
          </View>
          <Pressable
            style={[styles.button, styles.buttonOpen]}
            onPress={() => setModalVisible(true)}>
            <Text style={styles.textStyle}>Recommend</Text>
          </Pressable>
          <View style={styles.secondProduct}>
            <Image
              style={styles.componentImage}
              source={{uri: item.product2.image[0].url}}></Image>
            <TouchableOpacity
              style={styles.componentText}
              onPress={() => navigation.navigate('Recycle')}>
              <Text style={styles.text}>Choose</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.componentDetail}>
        <View style={styles.firstProductDetail}>
          <Image
            style={{
              width: 50,
              height: 50,
              marginTop: 20,
              marginLeft: 50,
              borderRadius: 15,
              objectFit: 'contain',
            }}
            source={{uri: item.product1.image[0].url}}></Image>
          <Text numberOfLines={3} style={styles.ProductlText}>
            {item.product1.name}
          </Text>
          <View>
            <PriceProductCompare price={item.product1.shopsData[0]?.price} />
          </View>
          <View style={styles.infoProduct}>
            <InfoProduct ingredient={item.product1.ingredient} />
          </View>
          <View style={styles.infoNutri}>
            <InfoProduct ingredient={item.product1.nutritional_ingredients} />
          </View>
          <View
            style={{
              borderTopWidth: 1,
              paddingHorizontal: 10,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text style={{color: '#000', fontWeight: 'bold', fontSize: 12}}>
              Nutri Score:{' '}
            </Text>
            {item.product1.nutriScore === 'A' && (
              <Image
                style={{width: 80, height: 40, objectFit: 'contain'}}
                key="nutri-score-a"
                source={require('../assets/svgtopng/nutriscore-a.png')}
              />
            )}
            {item.product1.nutriScore === 'B' && (
              <Image
                style={{width: 80, height: 40, objectFit: 'contain'}}
                key="nutri-score-b"
                source={require('../assets/svgtopng/nutriscore-b.png')}
              />
            )}
            {item.product1.nutriScore === 'C' && (
              <Image
                style={{width: 80, height: 40, objectFit: 'contain'}}
                key="nutri-score-c"
                source={require('../assets/svgtopng/nutriscore-c.png')}
              />
            )}
            {item.product1.nutriScore === 'D' && (
              <Image
                style={{width: 80, height: 40, objectFit: 'contain'}}
                key="nutri-score-d"
                source={require('../assets/svgtopng/nutriscore-d.png')}
              />
            )}
            {item.product1.nutriScore === 'E' && (
              <Image
                style={{width: 80, height: 40, objectFit: 'contain'}}
                key="nutri-score-e"
                source={require('../assets/svgtopng/nutriscore-e.png')}
              />
            )}
          </View>
          <View>
            <TheOrigin manufacturer={item.product1.manufacturer} />
          </View>
          <View>
            <SimilarStore
              key={item.product1._id}
              data={item.product1.shopsData}
              navigation={navigation}
            />
          </View>
        </View>
        <View style={styles.secondProductDetail}>
          <Image
            style={{width: 40, height: 50, marginTop: 20, marginHorizontal: 50}}
            source={{uri: item.product2.image[0].url}}></Image>
          <Text numberOfLines={3} style={styles.ProductlText}>
            {item.product2.name}
          </Text>
          <View>
            <PriceProductCompare price={item.product2.shopsData[0]?.price} />
          </View>
          <View style={styles.infoProduct}>
            <InfoProduct ingredient={item.product2.ingredient} />
          </View>
          <View style={styles.infoNutri}>
            <InfoProduct ingredient={item.product2.nutritional_ingredients} />
          </View>
          <View
            style={{
              borderTopWidth: 1,
              paddingHorizontal: 10,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text style={{color: '#000', fontWeight: 'bold', fontSize: 12}}>
              Nutri Score:{' '}
            </Text>
            {item.product2.nutriScore === 'A' && (
              <Image
                style={{width: 80, height: 40, objectFit: 'contain'}}
                key="nutri-score-a"
                source={require('../assets/svgtopng/nutriscore-a.png')}
              />
            )}
            {item.product2.nutriScore === 'B' && (
              <Image
                style={{width: 80, height: 40, objectFit: 'contain'}}
                key="nutri-score-b"
                source={require('../assets/svgtopng/nutriscore-b.png')}
              />
            )}
            {item.product2.nutriScore === 'C' && (
              <Image
                style={{width: 80, height: 40, objectFit: 'contain'}}
                key="nutri-score-c"
                source={require('../assets/svgtopng/nutriscore-c.png')}
              />
            )}
            {item.product2.nutriScore === 'D' && (
              <Image
                style={{width: 80, height: 40, objectFit: 'contain'}}
                key="nutri-score-d"
                source={require('../assets/svgtopng/nutriscore-d.png')}
              />
            )}
            {item.product2.nutriScore === 'E' && (
              <Image
                style={{width: 80, height: 40, objectFit: 'contain'}}
                key="nutri-score-e"
                source={require('../assets/svgtopng/nutriscore-e.png')}
              />
            )}
          </View>
          <View>
            <TheOrigin manufacturer={item.product2.manufacturer} />
          </View>
          <View>
            <SimilarStore
              key={item.product2._id}
              data={item.product2.shopsData}
              navigation={navigation}
            />
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
    paddingHorizontal: 10,
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
  ProductlText: {
    color: '#000',
    fontWeight: 'bold',
    marginVertical: 10,
    marginHorizontal: 20,
    minHeight: 40,
  },
  infoProduct: {
    // minHeight: 450,
    height: 500,
  },
  infoNutri: {
    height: 250,
    // borderTopColor: '#000',
    borderTopWidth: 1,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 12,
  },
  modalText: {
    color: '#000',
    fontSize: 12,
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default CompareInterface;
