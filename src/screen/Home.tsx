import {StyleSheet, TouchableOpacity, View, Image} from 'react-native';
import React, {useState} from 'react';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';
import useGetProduct from '../hook/useGetProduct';

const Home = ({navigation}: any) => {
  const [flashMode, setFlashMode] = useState<boolean>(false);
  const {handleBarcode} = useGetProduct({navigation});

  const setFlash = () => {
    setFlashMode(!flashMode);
  };
  const onSuccess = (e: any) => {
    const barcode = e.data.toString();
    const data = {barcodeNumber: barcode};
    setFlashMode(false);
    handleBarcode(data);
  };

  return (
    <QRCodeScanner
      onRead={onSuccess}
      flashMode={flashMode ? RNCamera.Constants.FlashMode.torch : null}
      topContent={
        <View style={styles.topContent}>
          <TouchableOpacity onPress={() => navigation.navigate('drawer')}>
            <Image
              style={styles.icon}
              source={require('../assets/iconScanScreen/home.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={styles.icon}
              source={require('../assets/iconScanScreen/library.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={setFlash}>
            {flashMode ? (
              <Image
                style={styles.iconFlash}
                source={require('../assets/iconScanScreen/flash-focused.png')}
              />
            ) : (
              <Image
                style={styles.iconFlash}
                source={require('../assets/iconScanScreen//flash.png')}
              />
            )}
          </TouchableOpacity>
        </View>
      }
    />
  );
};

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
  },
  topContent: {
    flexDirection: 'row',
    width: '90%',
    padding: 10,
    marginBottom: 70,
    borderRadius: 15,
    justifyContent: 'space-around',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    backgroundColor: '#333333',
  },
  icon: {
    width: 25,
    height: 25,
  },
  iconFlash: {},
});

export default Home;
