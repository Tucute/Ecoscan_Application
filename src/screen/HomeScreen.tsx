import {
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  ActivityIndicator,
  Text,
  Animated,
  Modal,
  Alert,
  Pressable,
  TextInput,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';
import {launchImageLibrary} from 'react-native-image-picker';
import useGetProduct from '../hook/useGetProduct';

const HomeScreen = ({navigation}: any) => {
  const moveAnimation = useRef(new Animated.Value(70)).current;
  const [flashMode, setFlashMode] = useState<boolean>(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [url, setUrl] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
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

  const openImagePicker = () => {
    const options = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };

    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('Image picker error: ', response.error);
      } else {
        let imageUri = response.uri || response.assets?.[0]?.uri;
        setSelectedImage(imageUri);
      }
    });
  };

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
    <>
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
            <View style={styles.upload}>
              <View style={styles.headerUpload}>
                <Text style={styles.uploadText}>Upload Image</Text>
                <TouchableOpacity
                  onPress={() => setModalVisible(!modalVisible)}>
                  <Image
                    style={styles.iconX}
                    source={require('../assets/iconUploadImage/Icon-X.png')}></Image>
                </TouchableOpacity>
              </View>
              <View style={styles.uploadFile}>
                {selectedImage ? (
                  <View style={styles.selectedImageContainer}>
                    <Image
                      style={styles.selectedImage}
                      source={{uri: selectedImage}}
                    />
                  </View>
                ) : (
                  <View style={styles.uploadPlaceholder}>
                    <Image
                      source={require('../assets/iconUploadImage/PaperUpload.png')}
                    />
                    <Text>
                      Drag & Drop or{' '}
                      <TouchableOpacity onPress={openImagePicker}>
                        <Text style={styles.chooseLink}>choose</Text>
                      </TouchableOpacity>{' '}
                      file to upload
                    </Text>
                    <Text>image or pdf</Text>
                  </View>
                )}
              </View>
              <View style={styles.line}>
                <View style={styles.firstLine}></View>
                <Text style={styles.lineText}>OR</Text>
                <View style={styles.secondLine}></View>
              </View>
              <View style={styles.viewUploadUrl}>
                <Text style={styles.importUrlText}>Import from URL</Text>
                <View style={styles.urlContainer}>
                  <TextInput
                    style={styles.urlInput}
                    placeholder="Paste URL here"
                    value={url}
                    onChangeText={text => setUrl(text)}
                  />
                </View>
              </View>
              <View>
                <View style={styles.needHelp}>
                  <Image
                    style={styles.needHelpIcon}
                    source={require('../assets/iconUploadImage/message-question.png')}></Image>
                  <Text>Still need help?</Text>
                </View>
                <View style={styles.btnUpload}>
                  <TouchableOpacity
                    style={styles.cancelButton}
                    onPress={() => setModalVisible(!modalVisible)}>
                    <Text style={styles.cancelText}>Cancel</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.submitButton}
                    onPress={() => {
                      if (url !== '' || true) {
                        console.log('Submit button clicked!');
                      } else {
                        console.log('Cannot submit without URL or file!');
                      }
                    }}
                    disabled={url === ''}>
                    <Text style={styles.submitText}>Submit</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
      </Modal>
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
            <TouchableOpacity onPress={() => setModalVisible(true)}>
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
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    position: 'absolute',
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
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
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
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
  upload: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 20,
    width: 300,
    height: 450,
    marginHorizontal: 20,
    marginVertical: 20,
  },
  headerUpload: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '90%',
    flexDirection: 'row',
    marginBottom: 25,
  },
  iconX: {
    // marginVertical: 20,
    // marginHorizontal: 110,
  },
  uploadText: {
    // marginVertical: 20,
    // marginHorizontal: 30,
    fontSize: 16,
    fontWeight: 'bold',
  },
  selectedImageContainer: {
    width: '100%',
    height: '100%',
    overflow: 'hidden',
  },
  selectedImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    objectFit: 'cover',
  },

  uploadPlaceholder: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  uploadFile: {
    width: 260,
    height: 150,
    marginHorizontal: 30,
    marginBottom: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderStyle: 'dashed',
    alignItems: 'center',
    justifyContent: 'center',
  },
  chooseLink: {
    paddingTop: 20,
    color: 'blue',
  },
  line: {
    display: 'flex',
    flexDirection: 'row',
  },
  firstLine: {
    width: '33%',
    height: 1,
    backgroundColor: 'black',
    marginVertical: 20,
    marginLeft: 32,
  },
  lineText: {
    marginVertical: 8,
    marginHorizontal: 14,
  },
  secondLine: {
    width: '33%',
    height: 1,
    backgroundColor: 'black',
    marginVertical: 20,
    marginRight: 32,
  },
  viewUploadUrl: {
    justifyContent: 'center',
    width: '90%',
  },
  importUrlText: {
    fontWeight: 'bold',
  },
  urlInput: {
    marginVertical: 10,
    borderWidth: 1,
    borderRadius: 12,
    width: '100%',
    height: 40,
    paddingLeft: 10,
  },
  urlContainer: {
    // flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 2,
  },
  selectButtonText: {
    color: '#2979F2',
  },
  needHelp: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  needHelpIcon: {
    marginRight: 8,
    marginVertical: 10,
  },
  btnUpload: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },

  cancelButton: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#ECEDF2',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 12,
    marginRight: 10,
  },

  submitButton: {
    backgroundColor: '#B0B5C9',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 12,
  },

  cancelText: {
    color: '#667091',
    fontWeight: 'bold',
  },
  submitText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default HomeScreen;
