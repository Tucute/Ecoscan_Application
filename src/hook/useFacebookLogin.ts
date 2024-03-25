import {useMutation} from '@tanstack/react-query';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Alert} from 'react-native';
import {Url} from '../url/Url';
import {Profile} from 'react-native-fbsdk-next';
interface Account {
  username: string | null;
  email: string;
  photo: string | null;
  phone?: string;
}
const useLoginFacebook = ({navigation}: any) => {
  //   const mutation = useMutation({
  //     mutationFn: async (data: Account) => {
  //       axios
  //         .post(`${Url}/user/loginWithGoogle`, data)
  //         .then(async res => {
  //           if (res.status === 200) {
  //             const user = JSON.stringify(res.data.data);
  //             await AsyncStorage.setItem('user', user);
  //             navigation.navigate('Root');
  //           } else {
  //             Alert.alert('Error', 'Have some error!');
  //           }
  //         })
  //         .catch(e => {
  //           console.log(e);
  //         });
  //     },
  //   });
  //   const handleLoginGoogle = (data: Account) => {
  //     mutation.mutate(data);
  //   };
  const currentProfile = Profile.getCurrentProfile().then(
    function(currentProfile) {
      if (currentProfile) {
        console.log("The current logged user is: " +
          currentProfile.name
          + ". His profile id is: " +
          currentProfile.userID
        );
      }
    }
  );

  return {currentProfile};
};

export default useLoginFacebook;
