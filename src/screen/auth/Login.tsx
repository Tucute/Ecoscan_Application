import React, { useEffect, useRef, useState } from 'react';
import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Platform,
  Keyboard,
  Alert,
} from 'react-native';
import { Formik } from 'formik';
import { LoginSchema } from './LoginValidation';
import useLogin from '../../hook/useLogin';
import useGoogleSignin from '../../hook/useGoogleSignin';

const Login = ({ navigation }: any) => {
  const [textEntry, setTextEntry] = useState(true);
  const passwordRef: any = useRef();
  const { handleLogin } = useLogin({ navigation });
  const { onGoogleButtonPress } = useGoogleSignin({ navigation });

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={LoginSchema}
      onSubmit={values => {
        setTimeout(() => {
          let account = {
            email: values.email,
            password: values.password,
          };
          handleLogin(account);
        }, 100);
      }}>
      {({ errors, touched, handleChange, handleBlur, values, handleSubmit }) => (
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.container}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <ImageBackground
              resizeMode="cover"
              source={require('../../assets/iconAuth/Background-login.png')}
              style={styles.container}>
              <View style={styles.viewLogo}>
                <Image
                  style={styles.logo}
                  source={require('../../assets/iconAuth/logo.png')}
                />
                <Text style={styles.nameTeam}>GreenTech</Text>
              </View>
              <View style={styles.textInput}>
                <TextInput
                  style={styles.input}
                  placeholder="Enter Email"
                  placeholderTextColor={'black'}
                  enterKeyHint={'next'}
                  onSubmitEditing={() => passwordRef.current?.focus()}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                />
                <Text style={styles.errorText}>
                  {errors.email && touched.email ? errors.email : null}
                </Text>
                <View style={styles.passwordContainer}>
                  <TextInput
                    ref={passwordRef}
                    style={styles.inputPass}
                    placeholder="Enter Password"
                    placeholderTextColor={'black'}
                    enterKeyHint={'done'}
                    onSubmitEditing={() => passwordRef.current?.focus()}
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password}
                    secureTextEntry={textEntry}
                  />
                  <TouchableOpacity onPress={() => setTextEntry(!textEntry)}>
                    {textEntry ? (
                      <Image
                        style={styles.iconShow}
                        source={require('../../assets/iconAuth/Show.png')}
                      />
                    ) : (
                      <Image
                        style={styles.iconShow}
                        source={require('../../assets/iconAuth/hideShow.png')}
                      />
                    )}
                  </TouchableOpacity>
                </View>

                <Text style={styles.errorText}>
                  {errors.password && touched.password ? errors.password : null}
                </Text>
                <Text style={styles.otherOption}>Or Login With</Text>
                <View style={styles.viewAsocia}>
                  <TouchableOpacity
                    style={styles.viewIcon}
                    onPress={onGoogleButtonPress}>
                    <Image
                      style={styles.iconFacebook}
                      source={require('../../assets/iconAuth/iconGoogle.png')}
                    />
                    <Text style={styles.textIcon}>Google</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.viewIcon}
                  >
                    <Image
                      style={styles.iconFacebook}
                      source={require('../../assets/iconAuth/iconFacebook.png')}
                    />
                    <Text style={styles.textIcon}>Google</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.viewFooter}>
                  <TouchableOpacity
                    style={styles.btnLogin}
                    onPress={handleSubmit}>
                    <Text style={styles.textStartBtn}>Login</Text>
                  </TouchableOpacity>
                  <View style={styles.isAccount}>
                    <Text style={styles.textTransfor}>
                      Don't have an account?{' '}
                    </Text>
                    <Text
                      style={styles.textSignup}
                      onPress={() => navigation.navigate('Register')}>
                      Signup
                    </Text>
                  </View>
                </View>
              </View>
            </ImageBackground>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewLogo: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  logo: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  nameTeam: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#000',
  },
  viewFooter: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  btnLogin: {
    alignItems: 'center',
    justifyContent: 'space-around',
    width: 170,
    height: 58,
    backgroundColor: '#333',
    borderRadius: 10,
  },
  textStartBtn: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textTransfor: {
    textAlign: 'center',
  },
  textSignup: {
    fontWeight: 'bold',
    color: 'red',
  },
  input: {
    borderWidth: 1,
    borderRadius: 15,
    borderBottomWidth: 1.221,
    borderBottomColor: '#063',
    color: '#000',
    paddingLeft: 25,
    fontSize: 14,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  textInput: {
    flex: 1.2,
    gap: 4,
    marginTop: 20,
    marginHorizontal: 30,
  },
  passwordContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 15,
    borderBottomWidth: 1.221,
    borderBottomColor: '#063',
    color: '#000',
    paddingLeft: 20,
    fontSize: 14,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  iconShow: {
    marginRight: 20,
  },
  errorText: {
    fontWeight: 'bold',
    color: 'red',
    margin: 0,
    padding: 0,
  },
  otherOption: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 10,
  },
  viewAsocia: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  viewIcon: {
    backgroundColor: '#fff',
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 130,
    height: 50,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  iconFacebook: {
    width: 30,
    height: 30,
  },
  textIcon: {
    fontSize: 14,
    fontWeight: '700',
    color: '#22242E',
    marginLeft: 15,
  },
  isAccount: {
    display: 'flex',
    flexDirection: 'row',
    marginVertical: 5
  }
});
export default Login;
function setState(arg0: {
  userInfo: import('@react-native-google-signin/google-signin').User;
}) {
  throw new Error('Function not implemented.');
}
