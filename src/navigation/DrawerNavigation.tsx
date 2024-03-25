import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Text,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
  createDrawerNavigator,
} from '@react-navigation/drawer';
import {useNavigation} from '@react-navigation/native';
import HeaderOptions from './HeaderOption';
import BottomTab from './BottomTab';
import Profile from '../screen/Profile';
import History from '../screen/History';
import Setting from '../screen/Setting';
import MyQRCode from '../screen/MyQRCode';
import ViewProfile from '../screen/ViewProfile';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import useLogout from '../hook/useLogout';
import AsyncStorage from '@react-native-async-storage/async-storage';
import useGetUser from '../hook/useGetUser';
import {ItemDrawer} from '../component/IteamDrawer';
interface OptionsScreenProps {
  drawerIcon: any;
  backgroundColor?: string;
  tintColor?: string;
  size?: number;
}

const CustomDrawer = (props: any) => {
  const {user, isFetchingUser} = useGetUser();

  const [userInfo, setUserInfo] = useState(useGetUser().user);

  useEffect(() => {
    if (user) {
      setUserInfo(user);
    }
  }, []);

  if (isFetchingUser) {
    return <ActivityIndicator size="large" color="#00ff00" />;
  }
  //   console.log('user log ở drawer: ', user);
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.containerHeaderDrawer}>
        <Image source={require('../assets/iconAuth/logo.png')}></Image>
        <>
          <View style={styles.contanierUser}>
            <MaterialCommunityIcons
              name="account-circle"
              size={80}></MaterialCommunityIcons>
            <Text style={styles.nameUser}>{user?.name}</Text>
          </View>
        </>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

const DrawerNavigator = () => {
  const navigation = useNavigation();
  const Drawer = createDrawerNavigator();
  const headerOptionsDrawer = {
    headerStyle: {
      backgroundColor: 'white',
    },
    drawerLabel: () => null,
    drawerIcon: () => (
        <ItemDrawer nameIcon="home" nameFeature="Home" />
      ),
    headerTitleStyle: {
      display: 'none',
    },
    headerRight: () => <HeaderOptions navigation={navigation} />,
  };

  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: true}}
      drawerContent={(props: any) => (
        <CustomDrawer {...props} />
      )}>
      <Drawer.Screen
        name="Home"
        component={BottomTab}
        options={headerOptionsDrawer}
      />
      <Drawer.Screen
        name="History"
        component={History}
        options={{
          drawerLabel: () => null,
          drawerIcon: () => (
            <ItemDrawer nameIcon="history" nameFeature="History" />
          ),
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={Setting}
        options={{
          drawerLabel: () => null,
          drawerIcon: () => (
            <ItemDrawer nameIcon="cog" nameFeature="Settings" />
          ),
        }}
      />
      <Drawer.Screen
        name="ViewProfile"
        component={Profile}
        options={{
            drawerLabel: () => null,
            drawerIcon: () => (
              <ItemDrawer nameIcon="account" nameFeature="Account" />
            ),
          }}
      />
    </Drawer.Navigator>
  );
};
export default DrawerNavigator;

const styles = StyleSheet.create({
  containerLogo: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 30,
  },
  image: {
    width: 80,
    height: 80,
  },
  nameApp: {
    color: '#30A2FF',
    fontWeight: 'bold',
    fontSize: 22,
  },

  containerLogout: {
    flexDirection: 'row',
    gap: 10,
    marginLeft: 20,
    marginTop: 10,
  },

  containerHeaderDrawer: {
    flex: 1,
    marginVertical: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contanierUser: {
    marginVertical: 20,
    // flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  nameUser: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  nameFeature: {
    fontSize: 15,
    marginLeft: 10,
    color: 'black',
    fontWeight: 'bold',
  },
});
