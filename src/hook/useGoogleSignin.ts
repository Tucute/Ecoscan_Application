import React, { useEffect } from 'react';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import useLoginGoogle from './useLoginGoogle';

const useGoogleSignin = ({navigation}: any) => {
  const {handleLoginGoogle} = useLoginGoogle({navigation});
  
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
    const account = {
      username: user.name,
      email: user.email,
      photo: user.photo,
    }
    handleLoginGoogle(account);    
  }
    return {onGoogleButtonPress};
};

export default useGoogleSignin;