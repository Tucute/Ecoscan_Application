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
     
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  
});
