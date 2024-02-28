import React, {useRef} from 'react';
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
} from 'react-native';
import {Formik} from 'formik';
import {RegisterSchema} from './RegisterValidation';
import useRegister from '../../hook/useRegister';

const Register = ({navigation}: any) => {
  const {mutationRegister} = useRegister({navigation});
  const inputRef: any = useRef();
  return (
    <Formik
      initialValues={{
        username: '',
        email: '',
        newPassword: '',
        confirmPassword: '',
      }}
      validationSchema={RegisterSchema}
      onSubmit={values => {
        setTimeout(() => {
          let account = {
            username: values.username,
            email: values.email,
            newPassword: values.newPassword,
            confirmPassword: values.confirmPassword,
          };
          mutationRegister.mutate(account);
        }, 100);
      }}>
      {({errors, touched, handleChange, handleBlur, values, handleSubmit}) => (
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
                  // ref={inputRef}
                  style={styles.input}
                  placeholder="Enter Username"
                  placeholderTextColor={'black'}
                  enterKeyHint={'next'}
                  onSubmitEditing={() => inputRef.current?.focus()}
                  onChangeText={handleChange('username')}
                  onBlur={handleBlur('username')}
                  value={values.username}
                />
                <Text style={styles.errorText}>
                  {errors.username && touched.username ? errors.username : null}
                </Text>
                <TextInput
                  style={styles.input}
                  placeholder="Enter Email"
                  placeholderTextColor={'black'}
                  enterKeyHint={'next'}
                  onSubmitEditing={() => inputRef.current?.focus()}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                />
                <Text style={styles.errorText}>
                  {errors.email && touched.email ? errors.email : null}
                </Text>
                <TextInput
                  ref={inputRef}
                  style={styles.input}
                  placeholder="Enter Password"
                  placeholderTextColor={'black'}
                  enterKeyHint={'next'}
                  onSubmitEditing={() => inputRef.current?.focus()}
                  onChangeText={handleChange('newPassword')}
                  onBlur={handleBlur('newPassword')}
                  value={values.newPassword}
                />
                <Text style={styles.errorText}>
                  {errors.newPassword && touched.newPassword
                    ? errors.newPassword
                    : null}
                </Text>
                <TextInput
                  ref={inputRef}
                  style={styles.input}
                  placeholder="Confirm Password"
                  placeholderTextColor={'black'}
                  enterKeyHint={'done'}
                  onSubmitEditing={() => inputRef.current?.focus()}
                  onChangeText={handleChange('confirmPassword')}
                  onBlur={handleBlur('confirmPassword')}
                  value={values.confirmPassword}
                />
                <Text style={styles.errorText}>
                  {errors.confirmPassword && touched.confirmPassword
                    ? errors.confirmPassword
                    : null}
                </Text>
                <View style={styles.viewFooter}>
                  <TouchableOpacity
                    style={styles.btnLogin}
                    onPress={handleSubmit}>
                    <Text style={styles.textStartBtn}>Sign up</Text>
                  </TouchableOpacity>
                  <Text
                    style={styles.textTransfor}
                    onPress={() => navigation.navigate('Login')}>
                    Already have an account?
                  </Text>
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
    flex: 1.2,
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
    flexDirection: 'row',
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
    marginVertical: 5,
    color: 'blue',
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
  textInput: {
    flex: 2,
    gap: 4,
    marginTop: 20,
    marginHorizontal: 30,
  },
  errorText: {
    fontWeight: 'bold',
    color: '#fff',
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
    width: 140,
    height: 57,
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
});
export default Register;
