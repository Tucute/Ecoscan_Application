import {useMutation} from '@tanstack/react-query';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Alert} from 'react-native';
import {Url} from '../url/Url';
import { useState } from 'react';
interface Account {
  email: string;
  password: string;
}
const useLogin = ({navigation}: any) => {
  const [isFetching, setIsFetching] = useState(false);
  const mutation = useMutation({
    mutationFn: async (data: Account) => {
      axios
        .post(`${Url}/user/sign-in`, data)
        .then(async res => {
          if (res.status === 200) {
            const user = JSON.stringify(res.data.data);
            await AsyncStorage.setItem('user', user);
            setIsFetching(false);
            navigation.navigate('Root')
          } else {
            Alert.alert('Error', 'Email hoặc mật khẩu không hợp lệ!');
          }
        })
        .catch(e => {
          console.log(e);
          Alert.alert('Error', 'Email hoặc mật khẩu không hợp lệ!');
        });
    },
  })
  const handleLogin = (data: Account) => {
    setIsFetching(true);
    mutation.mutate(data);
  };
  return {handleLogin, isFetching};
};

export default useLogin;