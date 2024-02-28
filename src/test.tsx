import React, { useState, useEffect } from 'react';
import { View, Text, Alert, Button } from 'react-native';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

export default function Test({navigation}: any) {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  const Logout = async () => {
    await GoogleSignin
    .signOut()
    .then(() => Alert.alert('Warning', 'Are you sure to Logout', [
        {text: 'Yes', onPress: () => navigation.navigate('Login')},
      ]));
  }

  const GetToken = async () => {
    const token = await GoogleSignin.getTokens();  
  }

  if (initializing) return null;

  if (!user) {
    return (
      <View>
        <Text>Login</Text>
      </View>
    );
  }

  return (
    <View>
      <Text>Welcome {user.email}</Text>
      <Button title='Logout' onPress={Logout}></Button>
      <Button title='Get Token' onPress={GetToken}></Button>
    </View>
  );
}