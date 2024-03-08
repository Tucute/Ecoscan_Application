import React, {useState, useEffect} from 'react';
import {View, Text, Alert, Button} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import useLogout from './hook/useLogout';

interface User {
  name: string;
  email: string;
  age?: number;
  phone?: string;
}
export default function Profile({navigation}: any) {
  const [user, setUser] = useState<User>();
  const {Logout} = useLogout({navigation});

  useEffect(() => {
    const getUser = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem('user');
        if (jsonValue) {
          setUser(JSON.parse(jsonValue));
        }
      } catch (e) {
        console.log(e);
      }
    };
    getUser();
  }, [user]);

  return (
    <View>
      <Text>Welcome {user?.name}</Text>
      <Text>Welcome {user?.email}</Text>
      <Text>Welcome {user?.age}</Text>
      <Button title="Logout" onPress={Logout}></Button>
    </View>
  );
}
