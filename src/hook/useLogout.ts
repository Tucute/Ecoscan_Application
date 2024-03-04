import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { Alert } from 'react-native';

const useLogout = ({navigation}: any) => {
    const Logout = async () => {
        await GoogleSignin
        .signOut()
        .then(() => Alert.alert('Warning', 'Are you sure to Logout', [
            {text: 'Yes', onPress: () => navigation.navigate('Login')},
          ]));
      };
    return {Logout}
};

export default useLogout;