import AsyncStorage from '@react-native-async-storage/async-storage';
import {useEffect, useState} from 'react';
import { Profile } from "react-native-fbsdk-next";

interface User {
  _id: string;
  name: string;
  email: string;
}

const useGetUser = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isFetchingUser, setIsFetchingUser] = useState<boolean>(true);
  const [fetchedOnce, setFetchedOnce] = useState<boolean>(false);

  useEffect(() => {
    const getUser = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem('user');        
        if (jsonValue) {
          setUser(JSON.parse(jsonValue));
        }
      } catch (e) {
        console.log('Not login yet: ', e);
      } finally {
        setIsFetchingUser(false);
        setFetchedOnce(true);
      }
    };

    if (!fetchedOnce) {
      getUser();
    }
  }, []);

  return {user, isFetchingUser};
};

export default useGetUser;
