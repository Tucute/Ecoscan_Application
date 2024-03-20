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
import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useQuery, useMutation } from '@tanstack/react-query';
import axios from 'axios';
import useGetUser from '../hook/useGetUser';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

interface getProfile {
  id: number;
  email: string;
  name: string;
  avatar: string;
  phone: string;
}
const Profile = ({ navigation }: any) => {

  const { user } = useGetUser();
  //   const [userData, setUserData] = useState<getProfile | undefined>();
  //   const [modalVisible, setModalVisible] = useState(false);
  //   const [newUser, setNewUser] = useState<getProfile>();
  //   const {user} = useGetUser();
  //   useEffect(() => {
  //     if (user) {
  //       setUserData(user);
  //     }
  //   }, [user]);

  //   const mutation = useMutation({
  //     mutationFn: async (data: getProfile) => {
  //       try {
  //         const jsonValue = await AsyncStorage.getItem('user');
  //         const value = jsonValue != null ? JSON.parse(jsonValue) : null;
  //         const token = value.token;
  //         const response = await axios.post(
  //           `https://2cf2-14-176-231-248.ngrok-free.app/api/update-user/`,
  //           data,
  //           {
  //             headers: {
  //               'Content-Type': 'application/json',
  //               Authorization: `Bearer ${token}`,
  //             },
  //           },
  //         );
  //         if (response.status === 200) {
  //           Alert.alert('Success', 'Update successfully');
  //         } else {
  //           Alert.alert('Invalid information!');
  //         }
  //         return response.data;
  //       } catch (error) {
  //         console.error(error);
  //       }
  //     },
  //   });

  //   const handleLogout = async () => {
  //     await AsyncStorage.removeItem('user');
  //     const user = await AsyncStorage.getItem('user');
  //     if (user === null) {
  //       navigation.navigate('LandingPage');
  //     }
  //   };

  //   const handleOnChange = (key: string, value: string) => {
  //     setNewUser(prevUserData => ({
  //       ...prevUserData,
  //       [key]: value,
  //     }));
  //   };
  //   const handleEditProfile = async () => {
  //     try {
  //       if (data) {
  //         setNewUser({...data});
  //       }
  //       setModalVisible(true);
  //     } catch (e) {
  //       console.log('Error: ', e);
  //     }
  //   };
  //   const handleSaveProfile = () => {
  //     setUserData(newUser);
  //     mutation.mutate(newUser);
  //     setModalVisible(!modalVisible);
  //   };
  return (
    <View style={styles.profileContainer}>
      <TouchableOpacity style={styles.iconBack} onPress={() => navigation.goBack()}>
        <Image
          source={require('../assets/CompareInterface-icon/Iconback.png')}>
        </Image>
      </TouchableOpacity>
      <View style={styles.headerProfile}>
        <View style={styles.profileTitle}>
          <Text style={styles.profileText}>Profile</Text>
        </View>
        <View style={styles.profileImage}>
          <Image
            style={styles.userProfileImage}
            source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-gcQt4cLfOtecrvODooKFD6cRWVUsX5yGjQ&usqp=CAU' }}
          />
          <TouchableOpacity onPress={() => navigation.navigate('EditProfiles')}>
            <Feather style={{ marginLeft: 120, bottom: 20 }} name='edit' size={20} color='#32ff7e' />
          </TouchableOpacity>
        </View>
        <View style={styles.profileName}>
          <Text style={styles.textName}>{user?.name}</Text>
        </View>
        <View style={styles.profileEmail}>
          <Text style={styles.email}>{user?.email}</Text>
        </View>
      </View>

      <View style={styles.componentInfo}>
        <TouchableOpacity style={styles.componentAccount}>
          <Entypo style={{ alignSelf: 'center' }} name='user' size={25} color={'#7052ff'} />
          <Text style={{ color: '#fff', fontSize: 20, alignSelf: 'center', marginRight: 130 }}>Account</Text>
          <MaterialIcons style={{ alignSelf: 'center' }} name='navigate-next' size={30} color='#fff' />
        </TouchableOpacity>

        <TouchableOpacity style={styles.componentAccount}>
          <Feather style={{ alignSelf: 'center' }} name='settings' size={25} color={'#7052ff'} />
          <Text style={{ color: '#fff', fontSize: 20, alignSelf: 'center', marginRight: 130 }}>Settings</Text>
          <MaterialIcons style={{ alignSelf: 'center' }} name='navigate-next' size={30} color='#fff' />
        </TouchableOpacity>

        <TouchableOpacity style={styles.componentAccount}>
          <Entypo style={{ alignSelf: 'center' }} name='users' size={25} color={'#7052ff'} />
          <Text style={{ color: '#fff', fontSize: 20, alignSelf: 'center', marginRight: 130 }}>About Us</Text>
          <MaterialIcons style={{ alignSelf: 'center' }} name='navigate-next' size={30} color='#fff' />
        </TouchableOpacity>
      </View>

      <View style={styles.fcUpdate}>
        <TouchableOpacity style={{ flexDirection: 'row', alignSelf: 'center' }}>
          <Text style={styles.textUpdate}>Sign out</Text>
          <FontAwesome style={{ alignSelf: 'center', marginLeft: 10 }} name='sign-out' size={30} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  profileContainer: {
    flex: 1,
    backgroundColor: '#333',
  },
  iconBack: {
    marginHorizontal: 20,
    marginTop: 20,
    borderRadius: 15,
  },
  headerProfile: {
    width: 200,
    alignSelf: 'center',
    position: 'absolute',
    marginVertical: 30
  },
  profileText: {
    color: "#fff",
    fontSize: 18,
    textAlign: 'center'
  },
  profileImage: {
    marginVertical: 20,
  },
  userProfileImage: {
    width: 120,
    height: 120,
    borderRadius: 100,
    alignSelf: 'center'
  },
  profileName: {
    alignItems: 'center'
  },
  profileEmail: {
    alignItems: 'center',
    marginVertical: 5
  },
  email: {
    color: '#C3C7C7'
  },
  textName: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
  componentInfo: {
    top: 260,
  },
  styleUser: {
    borderRadius: 100,
    width: 100,
    alignSelf: 'center',
    // marginLeft: 60
  },
  componentAccount: {
    backgroundColor: '#3E3D3D',
    flexDirection: 'row',
    borderRadius: 15,
    width: "85%",
    height: 60,
    shadowColor: 'rgba(0, 0, 0, 0.5)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 4,
    marginVertical: 10,
    justifyContent: 'space-evenly',
    marginHorizontal: 30,
  },
  fcUpdate: {
    top: 300,
    borderRadius: 25,
    alignSelf: 'center',
    backgroundColor: '#fff',
    width: '85%',
  },
  textUpdate: {
    fontWeight: 'bold',
    fontSize: 18,
    marginVertical: 15,
    textAlign: 'center',
  }
});
