import AsyncStorage from '@react-native-async-storage/async-storage';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import React, { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import axios from 'axios';
import { Url } from '../url/Url';

interface Account {
  username: string | null;
  email: string;
  photo: string | null;
  phone?: string;
}

const useLogout = ({ navigation }: any) => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);
  
  console.log(user);
  
  const Logout = async () => {
    try {
      if (user) {
        await GoogleSignin.signOut();
      }
      else {
        await axios.post(`${Url}/user/logout`);
      }
      await AsyncStorage.removeItem('user');
      Alert.alert('Success', 'Logged out successfully', [
        { text: 'OK', onPress: () => navigation.navigate('LandingPage') },
      ]);
    } catch (error) {
      console.log(error);
      Alert.alert('Error', 'An error occurred while logging out');
    }
  };
  return { Logout };
};

export default useLogout;
