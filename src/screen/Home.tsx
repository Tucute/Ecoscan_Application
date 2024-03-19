import {
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  ActivityIndicator,
  Text,
  Animated,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';
import useGetProduct from '../hook/useGetProduct';

const Home = ({navigation}: any) => {
  const moveAnimation = useRef(new Animated.Value(70)).current;
  const [flashMode, setFlashMode] = useState<boolean>(false);
  const {handleBarcode, isLoading, setIsLoading, isError, setIsError} =
    useGetProduct({
      navigation,
    });
  const setFlash = () => {
    setFlashMode(!flashMode);
  };
  const onSuccess = (e: any) => {
    setIsLoading(true);
    const barcode = e.data.toString();
    const data = {barcodeNumber: barcode, condition: true};
    if (flashMode) {
      setFlashMode(false);
    }
    handleBarcode(data);
  };
  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(moveAnimation, {
          toValue: -100, // Move up
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(moveAnimation, {
          toValue: 70, // Move back to the original position
          duration: 1000,
          useNativeDriver: true,
        }),
      ]),
    ).start();
  }, [moveAnimation]);

  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#00ff00" />
      </View>
    );
  }
  if (isError) {
    return (
      <View style={styles.viewNoResult}>
        <TouchableOpacity
          style={styles.iconBack}
          onPress={() => setIsError(false)}>
          <Image
            source={require('../assets/CompareInterface-icon/Iconback.png')}></Image>
        </TouchableOpacity>
        <View style={styles.container}>
          <Image
            style={styles.imgNoResult}
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/6134/6134065.png',
            }}
          />
          <Text style={styles.textNoResult}>No result</Text>
        </View>
      </View>
    );
  }
  return (
    <QRCodeScanner
      onRead={onSuccess}
      cameraTimeout={0}
      reactivateTimeout={0}
      flashMode={flashMode ? RNCamera.Constants.FlashMode.torch : null}
      showMarker={true}
      customMarker={
        <View style={styles.customMarkerContainer}>
          <View style={{flexDirection: 'row', columnGap: 50}}>
            <View style={styles.markerTopLeftBox} />
            <View style={styles.markerTopRightBox} />
          </View>
          <Animated.View
            style={[
              styles.animatedView,
              {
                transform: [
                  {
                    translateY: moveAnimation,
                  },
                ],
              },
            ]}></Animated.View>
          <View style={{flexDirection: 'row', columnGap: 50}}>
            <View style={styles.markerLeftBottomBox} />
            <View style={styles.markerRightBottomBox} />
          </View>
        </View>
      }
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
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  animatedView: {
    borderColor: '#B3CB1D',
    borderWidth: 4,
    width: 300,
    height: 0,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: '#333333',
  },
  viewNoResult: {
    flex: 0.8,
  },
  iconBack: {
    justifyContent: 'flex-start',
    width: '100%',
    marginTop: 10,
    marginLeft: 20,
  },
  textNoResult: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  imgNoResult: {
    width: 100,
    height: 100,
    objectFit: 'contain',
    marginBottom: 20,
  },
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  customMarkerContainer: {
    width: 250,
    height: 360,
    alignItems: 'center',
    justifyContent: 'center',
    rowGap: 30,
    columnGap: 40,
  },
  markerTopLeftBox: {
    width: 100,
    height: 110,
    borderTopWidth: 5,
    borderLeftWidth: 5,
    borderColor: '#B3CB1D',
    borderRadius: 10,
  },
  markerTopRightBox: {
    width: 100,
    height: 110,
    borderTopWidth: 5,
    borderRightWidth: 5,
    borderColor: '#B3CB1D',
    borderRadius: 10,
  },
  markerLeftBottomBox: {
    width: 100,
    height: 110,
    borderBottomWidth: 5,
    borderLeftWidth: 5,
    borderColor: '#B3CB1D',
    borderRadius: 10,
  },
  markerRightBottomBox: {
    width: 100,
    height: 110,
    borderBottomWidth: 5,
    borderRightWidth: 5,
    borderColor: '#B3CB1D',
    borderRadius: 10,
  },
  line: {
    borderColor: '#B3CB1D',
    borderWidth: 4,
    width: 300,
    height: 0,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: '#333333',
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
