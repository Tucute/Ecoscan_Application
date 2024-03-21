import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Alert,
  Modal,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import {launchImageLibrary} from 'react-native-image-picker';

const UploadImage = () => {
  const [url, setUrl] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const openImagePicker = () => {
    const options = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };

    launchImageLibrary(options, (response) => {
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

//   const handleSelectButtonClick = async () => {
//     try {
//       if (selectedImageUri) {
//         const formData = new FormData();
//         formData.append('file', {
//           uri: selectedImageUri,
//           type: 'image/jpeg',
//           name: 'upload.jpg',
//         });

//         const cloudinaryURL =
//           'https://api.cloudinary.com/v1_1/djveiec3v/image/upload';
//         const cloudName = 'djveiec3v';
//         const apiKey = '974191498252429';

//         const response = await axios.post(cloudinaryURL, formData, {
//           headers: {
//             'Content-Type': 'multipart/form-data',
//             'X-Requested-With': 'XMLHttpRequest',
//           },
//           params: {
//             upload_preset: `EcoscanApp`,
//             cloud_name: djveiec3v,
//             api_key: 974191498252429,
//           },
//         });

//         const imageUrl = response.data.secure_url;
//         console.log('Image uploaded to Cloudinary:', imageUrl);
//       } else {
//         console.log('No image selected to upload');
//       }
//     } catch (error) {
//       console.error('Error uploading image to Cloudinary:', error);
//     }
//   };

  return (
    <View style={styles.container}>
      <View style={styles.upload}>
        <View style={styles.headerUpload}>
          <Text style={styles.uploadText}>Upload Image</Text>
          <TouchableOpacity>
            <Image
              style={styles.iconX}
              source={require('../assets/iconUploadImage/Icon-X.png')}></Image>
          </TouchableOpacity>
        </View>
        <View style={styles.uploadFile}>
          {selectedImage ? (
            <View style={styles.selectedImageContainer}>
              <Image style={styles.selectedImage} source={{uri: selectedImage}} />
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
        <View>
          <Text style={styles.importUrlText}>import from URL</Text>
          <View style={styles.urlContainer}>
            <TextInput
              style={styles.urlInput}
              placeholder="Paste URL here"
              value={url}
              onChangeText={(text) => setUrl(text)}
            />
            <TouchableOpacity
              style={styles.selectButton}
            >
              <Text style={styles.selectButtonText}>Select</Text>
            </TouchableOpacity>
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
              onPress={() => console.log('Cancel button clicked')}>
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
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4b4b4b',
  },
  iconback: {
    bottom: 10,
    right: 10,
  },
  upload: {
    backgroundColor: '#fff',
    borderRadius: 20,
    width: '90%',
    height: 500,
    marginHorizontal: 20,
    marginVertical: 20,
  },
  headerUpload: {
    display: 'flex',
    flexDirection: 'row',
  },
  iconX: {
    marginVertical: 20,
    marginHorizontal: 110,
  },
  uploadText: {
    marginVertical: 20,
    marginHorizontal: 30,
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
  importUrlText: {
    fontWeight: 'bold',
    marginHorizontal: 30,
  },
  urlInput: {
    marginHorizontal: 30,
    marginVertical: 10,
    borderWidth: 1,
    borderRadius: 12,
    width: 260,
    height: 40,

    paddingLeft: 20,
  },
  urlContainer: {
    // flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 2,
  },
  selectButton: {
    right: 90,
    // paddingVertical: 10,
    // paddingHorizontal: 20,
    // borderRadius: 12,
    // marginLeft: 10,
    // width: 10,
  },

  selectButtonText: {
    color: '#2979F2',
  },
  needHelp: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  needHelpIcon: {
    marginLeft: 30,
    marginRight: 8,
    marginVertical: 10,
  },
  btnUpload: {
    flexDirection: 'row',
    justifyContent: 'center',
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

export default UploadImage;
