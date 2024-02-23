import {useMutation} from '@tanstack/react-query';
import axios from 'axios';
// import AsyncStorage from '@react-native-async-storage/async-storage';
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
            // const token = res.data.token;
            // const userid = res.data.user.id;
            // const user = JSON.stringify({token, userid});
            // await AsyncStorage.setItem('user', user);
            Alert.alert('Success', 'Login successfully', [
              {text: 'OK', onPress: () => navigation.navigate('Home')},
            ]);
          } else {
            Alert.alert('Error', 'Email or password is invalid');
          }
        })
        .catch(e => {
          Alert.alert(e.response.data.message);
        });
    },
  })
  const handleLogin = (data: Account) => {
    mutation.mutate(data);
  };
  return {handleLogin};
};

export default useLogin;