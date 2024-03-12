import {useMutation} from '@tanstack/react-query';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Alert} from 'react-native';
import {Url} from '../url/Url';
interface Account {
  email: string;
  password: string;
}
const useLogin = ({navigation}: any) => {
  const mutation = useMutation({
    mutationFn: async (data: Account) => {
      axios
        .post(`${Url}/user/sign-in`, data)
        .then(async res => {
          if (res.status === 200) {
            const user = JSON.stringify(res.data.data);
            console.log('user : ',user);
            await AsyncStorage.setItem('user', user);
            // Alert.alert('Success', 'Login successfully', [
            //   {text: 'OK', onPress: () => navigation.navigate('Root')},
            // ]);
            navigation.navigate('Root')
          } else {
            Alert.alert('Error', 'Email or password is invalid');
          }
        })
        .catch(e => {
          console.log(e);
        });
    },
  })
  const handleLogin = (data: Account) => {
    mutation.mutate(data);
  };
  return {handleLogin};
};

export default useLogin;