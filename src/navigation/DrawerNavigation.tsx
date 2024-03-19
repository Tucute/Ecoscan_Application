import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {useNavigation} from '@react-navigation/native';
import HeaderOptions from './HeaderOption';
import BottomTab from './BottomTab';
import Profile from '../Profile';
import History from '../screen/History';
import Setting from '../screen/Setting';
import MyQRCode from '../screen/MyQRCode';
import ViewProfile from '../screen/ViewProfile';

interface OptionsScreenProps {
  drawerIcon: any;
  backgroundColor?: string;
  tintColor?: string;
  size?: number;
}
const DrawerNavigator = () => {
  const Drawer = createDrawerNavigator();
  const navigation = useNavigation();

  const headerOptions = {
    headerStyle: {
      backgroundColor: 'white',
    },
    headerTitleStyle: {
      display: 'none',
    },
    headerRight: () => <HeaderOptions navigation={navigation} />,
  };
  const optionsScreen = ({drawerIcon, size = 24}: OptionsScreenProps) => ({
    drawerIcon: ({color}: {color: string}) => (
      <Image
        source={drawerIcon}
        style={{width: size, height: size, tintColor: color}}
      />
    ),
    ...headerOptions,
  });

  return (
    <Drawer.Navigator
      initialRouteName="Main"
      screenOptions={{headerShown: true}}>
      <Drawer.Screen
        name="Main"
        component={BottomTab}
        options={headerOptions}
      />
      <Drawer.Screen
        name="History"
        component={History}
        options={optionsScreen({
          drawerIcon: require('../assets/iconDrawerNavigation/history.png'),
          backgroundColor: 'white',
        })}
      />
      <Drawer.Screen
        name="Setting"
        component={Setting}
        options={optionsScreen({
          drawerIcon: require('../assets/iconDrawerNavigation/setting.png'),
          backgroundColor: 'white',
        })}
      />
      {/* <Drawer.Screen
        name="My QRCode"
        component={MyQRCode}
        options={optionsScreen({
          drawerIcon: require('../assets/iconDrawerNavigation/MyQRcode.png'),
          backgroundColor: 'white',
          size: 22,
        })}
      /> */}
      <Drawer.Screen
        name="ViewProfile"
        component={ViewProfile}
        options={optionsScreen({
          drawerIcon: require('../assets/iconDrawerNavigation/profile.png'),
          backgroundColor: 'white',
          size: 30,
        })}
      />
    </Drawer.Navigator>
  );
};
export default DrawerNavigator;

const styles = StyleSheet.create({});
