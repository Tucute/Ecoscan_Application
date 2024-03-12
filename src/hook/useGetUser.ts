import AsyncStorage from '@react-native-async-storage/async-storage';
import {useEffect, useState} from 'react';

interface User {
  _id: string;
  name: string;
  email: string;
}
const useGetUser = () => {
  const [user, setUser] = useState<User>();
  useEffect(() => {
    const getUser = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem('user');
        if (jsonValue) {
          setUser(JSON.parse(jsonValue));
        }
      } catch (e) {
        console.log('Not login yet: ', e);
      }
    };
    getUser();
  }, [user])
  return {user};
};

export default useGetUser;
