import axios from 'axios';
import {useMutation} from '@tanstack/react-query';
import {Alert} from 'react-native';
import {Url} from '../url/Url';

interface Register {
  username: string;
  email: string;
  newPassword: string;
  confirmPassword: string;
}
const useRegister = ({navigation}: any) => {
  const mutationRegister = useMutation({
    mutationFn: async (data: Register) => {
      axios
        .post(`${Url}/user/sign-up`, data)
        .then(res => {
          if (res.status === 200) {
            Alert.alert('Success', 'Register successfully', [
              {text: 'OK', onPress: () => navigation.navigate('Login')},
            ]);
          } else {
            Alert.alert('Invalid information!');
          }
        })
        .catch(e => {
          Alert.alert(e.response.data.message);
        });
    },
  });
  return {
    mutationRegister,
  };
};
export default useRegister;
