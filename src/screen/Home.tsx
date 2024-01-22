import {StyleSheet, Text, TouchableOpacity, Linking} from 'react-native';
import React from 'react';

import QRCodeScanner from 'react-native-qrcode-scanner';
// import {RNCamera} from 'react-native-camera';

const Home = ({navigation}: any) => {
  const onSuccess = (e: any) => {
    // Linking.openURL(e.data).catch(err =>
    //   console.error('An error occurred', err),
    // );
    navigation.navigate('productDetail', {barcode: e.data});
  };

  return (
    <QRCodeScanner
      onRead={onSuccess}
      // flashMode={RNCamera.Constants.FlashMode.torch}
      topContent={
        <Text style={styles.centerText}>
          Go to <Text style={styles.textBold}>Take photo</Text> on your computer
          and scan the QR code.
        </Text>
      }
      bottomContent={
        <TouchableOpacity style={styles.buttonTouchable}>
          <Text style={styles.buttonText}>OK. Got it!</Text>
        </TouchableOpacity>
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
});

export default Home;
