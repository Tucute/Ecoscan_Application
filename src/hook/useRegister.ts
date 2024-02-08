import axios from 'axios';
import {useMutation} from '@tanstack/react-query';
import {Alert} from 'react-native';
import { Url } from '../url/Url';

interface Register {
  userName: string;
  email: string;
  password: string;
}
const useRegister = ({navigation}: any) => {
  const mutationRegister = useMutation({
    mutationFn: async (data: Register) => {
      axios
        .post(`${Url}/user`, data)
        .then(res => {
          if (res.status === 201) {
            Alert.alert('Success', 'Register successfully', [
              {text: 'OK', onPress: () => navigation.navigate('Login')},
            ]);
          } else {
            Alert.alert('Invalid information!');
          }
        })
        .catch(e => {
          console.log(e);
        });
    },
  });
  return {
    mutationRegister,
  };
};
export default useRegister;
