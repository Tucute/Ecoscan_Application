import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';

const HeaderOptions = ({navigation}: any) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
      }}>
        <TouchableOpacity
        style={{
            alignItems: 'center',
            width: '71%',
        }}
          onPress={() => {
            navigation.navigate('Main');
          }}>
          <Image
            source={require('../assets/iconAuth/logo.png')}
            style={{
                width: 28,
                height: 28,
                alignItems: 'center',
              }}
          />
          <Text style= {{color:'#000'}}>Ecoscan Application</Text>
        </TouchableOpacity>
      <View
        style={{
          flexDirection: 'row',
          marginRight: 6,
          justifyContent: 'flex-end',
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Notification');
          }}>
          <Image
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/3119/3119338.png',
            }}
            style={{
                width: 28,
                height: 28,
                alignItems: 'center',
                marginRight: 20,
              }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HeaderOptions;
