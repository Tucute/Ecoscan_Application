import {useMutation} from '@tanstack/react-query';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Alert} from 'react-native';
import {Url} from '../url/Url';
import { useState } from 'react';
interface Account {
    username: string | null;
    email: string | null;
    photo?: string | null;
    phone?: string | null;
}
const useLoginGoogle = ({navigation}: any) => {
  const [isLoading, setIsLoading] = useState(false);
  const mutation = useMutation({
    mutationFn: async (data: Account) => {
      axios
        .post(`${Url}/user/loginWithGoogle`, data)
        .then(async res => {
          if (res.status === 200) {
            const user = JSON.stringify(res.data.data);
            await AsyncStorage.setItem('user', user);
            setIsLoading(false);
            navigation.navigate('Root');
          } else {
            Alert.alert('Error', 'Đã xảy ra lỗi, vui lòng thử lại!');
          }
        })
        .catch(e => {
          console.log(e);
        });
    },
  });
  const handleLoginGoogle = (data: Account) => {
    setIsLoading(true);
    mutation.mutate(data);
  };
  return {handleLoginGoogle, isLoading};
};

export default useLoginGoogle;
