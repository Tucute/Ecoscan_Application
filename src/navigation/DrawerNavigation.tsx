import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import BottomTab from './BottomTab';
import Profile from '../Profile';
import History from '../screen/History';
import Setting from '../screen/Setting';
import MyQRCode from '../screen/MyQRCode';

interface OptionsScreenProps {
  drawerIcon: any;
  backgroundColor?: string;
  tintColor?: string;
  size?: number;
}
const DrawerNavigator = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      initialRouteName="Main"
      screenOptions={{headerShown: false}}>
      <Drawer.Screen
        name="Main"
        component={BottomTab}
        options={{headerShown: true}}
      />
      <Drawer.Screen name="History" component={History} />
      <Drawer.Screen name="Setting" component={Setting} />
      <Drawer.Screen name="My QRCode" component={MyQRCode} />
      <Drawer.Screen name="Profile" component={Profile} />
    </Drawer.Navigator>
  );
};
export default DrawerNavigator;

const styles = StyleSheet.create({});
