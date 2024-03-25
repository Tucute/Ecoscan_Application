import React from 'react';
import {LoginManager, Profile} from 'react-native-fbsdk-next';
import useLoginGoogle from './useLoginGoogle';

const useLoginFacebook = ({navigation}: any) => {
    const {handleLoginGoogle} = useLoginGoogle({navigation});
    async function onFacebookButtonPress() {
        await LoginManager.logInWithPermissions(["public_profile"]).then(
            function(result) {
              if (result.isCancelled) {
                console.log("Login cancelled");
              } else {
                console.log(result)
              }
            },
            function(error) {
              console.log("Login fail with error: " + error);
            }
          );
          const currentProfile = Profile.getCurrentProfile().then(
            function(currentProfile) {
              if (currentProfile) {
                console.log("The current logged user is: " +
                  currentProfile.name
                  + ". His profile id is: " +
                  currentProfile.userID
                );
                const account = {
                    username: currentProfile.name,
                    email: currentProfile.email,
                  }
                  handleLoginGoogle(account);
              }
            }
          );

      }
  return {onFacebookButtonPress};
};

export default useLoginFacebook;
