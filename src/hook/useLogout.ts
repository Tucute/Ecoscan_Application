import AsyncStorage from '@react-native-async-storage/async-storage';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { Alert } from 'react-native';

const useLogout = ({navigation}: any) => {
    const Logout = async () => {
        try {
          await AsyncStorage.removeItem('user');
          await GoogleSignin.signOut().then(() =>
            Alert.alert('Warning', 'Are you sure to Logout', [
              {text: 'Yes', onPress: () => navigation.navigate('LandingPage')},
            ]),
          );
        } catch (e) {
          console.log('Lỗi khi đăng xuất: ', e);
        }
      };
    return {Logout}
};

export default useLogout;