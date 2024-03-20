import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Modal,
  Alert,
  TextInput,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useQuery, useMutation} from '@tanstack/react-query';
import axios from 'axios';
// import useUser from '../../hooks/useUser';
import useGetUser from '../hook/useGetUser';
interface getProfile {
  id: number;
  email: string;
  name: string;
  avatar: string;
  phone: string;
}
const Profile = ({navigation}: any) => {
  const [userData, setUserData] = useState<getProfile | undefined>();
  const [modalVisible, setModalVisible] = useState(false);
  const [newUser, setNewUser] = useState<getProfile>();
  const {user} = useGetUser();
  useEffect(() => {
    if (user) {
      setUserData(user);
    }
  }, [user]);

  const mutation = useMutation({
    mutationFn: async (data: getProfile) => {
      try {
        const jsonValue = await AsyncStorage.getItem('user');
        const value = jsonValue != null ? JSON.parse(jsonValue) : null;
        const token = value.token;
        const response = await axios.post(
          `https://2cf2-14-176-231-248.ngrok-free.app/api/update-user/`,
          data,
          {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`,
            },
          },
        );
        if (response.status === 200) {
          Alert.alert('Success', 'Update successfully');
        } else {
          Alert.alert('Invalid information!');
        }
        return response.data;
      } catch (error) {
        console.error(error);
      }
    },
  });

  const handleLogout = async () => {
    await AsyncStorage.removeItem('user');
    const user = await AsyncStorage.getItem('user');
    if (user === null) {
      navigation.navigate('LandingPage');
    }
  };

  const handleOnChange = (key: string, value: string) => {
    setNewUser(prevUserData => ({
      ...prevUserData,
      [key]: value,
    }));
  };
  const handleEditProfile = async () => {
    try {
      if (data) {
        setNewUser({...data});
      }
      setModalVisible(true);
    } catch (e) {
      console.log('Error: ', e);
    }
  };
  const handleSaveProfile = () => {
    setUserData(newUser);
    mutation.mutate(newUser);
    setModalVisible(!modalVisible);
  };
  return (
    <View style={styles.profileContainer}>
      <View style={styles.profile}>
        <View style={styles.img}>
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
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
                  <TextInput
                    placeholderTextColor={'black'}
                    style={styles.contenttext}
                    placeholder="New Name"
                    value={newUser?.name}
                    onChangeText={text => handleOnChange('name', text)}
                  />
                  <TextInput
                    placeholderTextColor={'black'}
                    style={styles.contenttext}
                    placeholder="New email"
                    value={newUser?.email}
                    onChangeText={text => handleOnChange('email', text)}
                  />
                  <TextInput
                    placeholder="New phone"
                    style={styles.contenttext}
                    placeholderTextColor={'black'}
                    value={newUser?.phone}
                    onChangeText={text => handleOnChange('phone', text)}
                  />
                  <TouchableOpacity
                    style={[styles.button, styles.buttonClose]}
                    onPress={handleSaveProfile}>
                    <Text style={styles.textStyle}>Save</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>
            <View style={styles.bgImg}>
              {userData?.avatar ? (
                <Image style={styles.avatar} source={{uri: userData.avatar}} />
              ) : null}
            </View>
            <Text style={styles.contentImg}>{userData?.name}</Text>
          </View>
          <View style={{marginHorizontal: 10}}>
            <Text style={styles.contentImg}>{userData?.email}</Text>
            <Text style={styles.contentImg}>{userData?.phone}</Text>
            <TouchableOpacity
              style={styles.preventProfile}
              onPress={handleEditProfile}>
              <Text style={styles.contentPrevent}>Edit Profile</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <View>
            <TouchableOpacity onPress={() => navigation.navigate('Your Order')}>
              <View style={styles.namecontain}>
                <Image
                  source={require('../assets/img_profile/balance.png')}
                />
                <Text style={styles.name}>Your order</Text>
                <Image source={require('../assets/img_profile/large.png')} />
              </View>
            </TouchableOpacity>
            <View style={styles.namecontain}>
              <Image source={require('../assets/img_profile/data.png')} />
              <Text style={styles.name}>Sync</Text>
              <Image source={require('../assets/img_profile/large.png')} />
            </View>
          </View>
          <View style={styles.line}></View>
          <View>
            <View style={styles.namecontain}>
              <Image
                source={require('../assets/img_profile/language.png')}
              />
              <Text style={styles.name}>Language</Text>
              <Image source={require('../assets/img_profile/large.png')} />
            </View>
            <View style={styles.namecontain}>
              <Image source={require('../assets/img_profile/sync.png')} />
              <Text style={styles.name}>Security</Text>
              <Image source={require('../assets/img_profile/large.png')} />
            </View>
          </View>
          <View style={styles.line}></View>
          <View>
            <View style={styles.namecontain}>
              <Image source={require('../assets/img_profile/any.png')} />
              <Text style={styles.name}>About</Text>
              <Image source={require('../assets/img_profile/large.png')} />
            </View>
            <View style={styles.namecontain}>
              <Image
                source={require('../assets/img_profile/feedback.png')}
              />
              <Text style={styles.name}>Feedback</Text>
              <Image source={require('../assets/img_profile/large.png')} />
            </View>
          </View>
          <View style={styles.line}></View>
          <View>
            <TouchableOpacity style={styles.namecontain} onPress={handleLogout}>
              <Image source={require('../assets/img_profile/logout.png')} />
              <Text style={styles.name}>Log out</Text>
              <Image source={require('../assets/img_profile/large.png')} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  profileContainer: {
    flex: 1,
  },
  profile: {
    marginHorizontal: 40,
    marginVertical: 20,
  },
  img: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bgImg: {
    width: 120,
    height: 120,
    borderRadius: 50,
    backgroundColor: '#0D986A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentImg: {
    fontSize: 16,
    color: '#000000',
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  preventProfile: {
    width: 126,
    height: 38,
    backgroundColor: '#0D986A',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentPrevent: {
    fontSize: 16,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  name: {
    fontSize: 14,
    color: '#000000',
  },
  line: {
    width: '100%',
    height: 1,
    backgroundColor: 'black',
    marginVertical: 10,
  },
  namecontain: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  avatar: {
    width: '100%',
    height: '100%',
    borderRadius: 50,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 10,
    backgroundColor: '#BDBDBD',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    width: 360,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
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
    width: 100,
  },
  textColor: {
    color: '#000',
  },
  contenttext: {
    borderWidth: 1,
    width: '100%',
    marginVertical: 10,
    borderRadius: 12,
    paddingLeft: 10,
  },
});
