import {useMutation} from '@tanstack/react-query';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Alert} from 'react-native';
import {Url} from '../url/Url';
interface Account {
    username: string | null;
    email: string | null;
    photo?: string | null;
    phone?: string | null;
}
const useLoginGoogle = ({navigation}: any) => {
  const mutation = useMutation({
    mutationFn: async (data: Account) => {
      axios
        .post(`${Url}/user/loginWithGoogle`, data)
        .then(async res => {
          if (res.status === 200) {
            const user = JSON.stringify(res.data.data);
            await AsyncStorage.setItem('user', user);
            navigation.navigate('Root');
          } else {
            Alert.alert('Error', 'Have some error!');
          }
        })
        .catch(e => {
          console.log(e);
        });
    },
  });
  const handleLoginGoogle = (data: Account) => {
    mutation.mutate(data);
  };
  return {handleLoginGoogle};
};

export default useLoginGoogle;
