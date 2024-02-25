import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Linking,
  View,
  Image,
} from 'react-native';
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
          <TouchableOpacity>
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
            <Image
              style={styles.icon}
              source={require('../assets/iconScanScreen/switchCam.png')}
            />
          </TouchableOpacity>
        </View>
      }
      cameraStyle={{marginHorizontal: 20}}
      bottomContent={
        <View style={{}}>
          <TouchableOpacity style={styles.tbQrCode}>
            <Image
              style={styles.iconQrCode}
              source={require('../assets/iconScanScreen/QrCode.png')}
            />
          </TouchableOpacity>
          <View style={styles.bottomContent}>
            <TouchableOpacity>
              <Image
                style={styles.iconBottom}
                source={require('../assets/iconScanScreen/generate.png')}
              />
              <Text style={styles.text}>Generate</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                style={styles.iconBottom}
                source={require('../assets/iconScanScreen/history.png')}
              />
              <Text style={styles.text}>History</Text>
            </TouchableOpacity>
          </View>
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
  bottomContent: {
    flexDirection: 'row',
    width: '90%',
    padding: 20,
    marginTop: 60,
    borderRadius: 15,
    justifyContent: 'space-between',
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
  iconBottom: {
    marginHorizontal: 20,
    width: 30,
    height: 30,
  },
  tbQrCode: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    zIndex: 1000,
  },
  iconQrCode: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  text: {
    color: '#fff',
    textAlign: 'center',
  },
});

export default Home;
