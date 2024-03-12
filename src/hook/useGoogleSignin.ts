import React, { useEffect } from 'react';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import AsyncStorage from '@react-native-async-storage/async-storage';

const useGoogleSignin = () => {
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '377604278725-dk405forvubt46ncr0bh4iddsmpfhgd2.apps.googleusercontent.com',
    });
  });
  
  async function onGoogleButtonPress() {
    await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
    const {idToken, user} = await GoogleSignin.signIn();
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    await auth().signInWithCredential(googleCredential);
    const newUser = {
      _id: user.id,
      email: user.email,
      name: user.givenName
    }
    const value = JSON.stringify(newUser);
    await AsyncStorage.setItem('user', value)
    console.log(value);
  }
    return {onGoogleButtonPress};
};

export default useGoogleSignin;