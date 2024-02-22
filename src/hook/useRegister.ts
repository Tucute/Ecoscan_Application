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
      console.log(data);
      const newData = JSON.stringify(data);
      axios
        .post(`${Url}/user/sign-up`, newData)
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
          console.log('Error content: ', e.response.data);
        });
    },
  });
  return {
    mutationRegister,
  };
};
export default useRegister;
