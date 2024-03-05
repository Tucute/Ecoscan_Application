import React, { useEffect } from 'react';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import { Alert } from 'react-native';

const useGoogleSignin = ({navigation}: any) => {
    
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '377604278725-dk405forvubt46ncr0bh4iddsmpfhgd2.apps.googleusercontent.com',
    });
  });
  
  async function onGoogleButtonPress() {
    await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
    const {idToken} = await GoogleSignin.signIn();
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    await auth().signInWithCredential(googleCredential);
    Alert.alert('Success', 'Login successfully', [
      {text: 'OK', onPress: () => navigation.navigate('BottomTab')},
    ]);
  }
    return {onGoogleButtonPress};
};

export default useGoogleSignin;