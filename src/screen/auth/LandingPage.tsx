import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import {ImageBackground, StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import useGetUser from '../../hook/useGetUser';
interface User {
  name: string;
  email: string;
  age?: number;
  phone?: string;
}
const LandingPage = ({navigation}: any) => {
  const {user} = useGetUser();
  return (
      <ImageBackground
        resizeMode="cover"
        source={require('../../assets/iconAuth/Background-login.png')}
        style={styles.container}
      >
        <View style={styles.viewLogo}>
            <Image style={styles.logo} source={require('../../assets/iconAuth/logo.png')} />
            <Text style={styles.nameTeam}>GreenTech</Text>
        </View>
        <View style={styles.viewFooter}>
          <View style={styles.viewText}>
          <Text style={styles.textStart}>Get Started </Text>
            <Text style={styles.textIntro}>Go and enjoy our features for free and make your life easy with us.</Text>
          </View>
            <TouchableOpacity style={styles.btnStart} onPress={() => {user? navigation.navigate('Root'): navigation.navigate('Login')}}>
                <Text style={styles.textStartBtn}>Let's Start</Text>
            </TouchableOpacity>
        </View>
      </ImageBackground>
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
    width: 250,
    height: 250,
    objectFit: 'contain',
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
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  viewText: {
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  textStart: {
    fontFamily: 'Itim',
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000',
  },
  textIntro: {
    textAlign: 'center',
    color: '#000',
    marginVertical: 10,
    paddingHorizontal: 15,
    fontSize: 14,
  },
  btnStart: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: 320,
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
});
export default LandingPage;
