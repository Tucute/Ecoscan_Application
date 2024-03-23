import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Text,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
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
import { ItemDrawer } from '../component/IteamDrawer';
interface OptionsScreenProps {
  drawerIcon: any;
  backgroundColor?: string;
  tintColor?: string;
  size?: number;
}

const CustomDrawer = (props: any, {navigation}: any) => {
  const {Logout} = useLogout({navigation});
  const {user, isFetchingUser} = useGetUser();

  if (isFetchingUser) {
    return <ActivityIndicator size="large" color="#00ff00" />;
  }
  console.log('user log ở drawer: ', user);
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.containerHeaderDrawer}>
        <Image source={require('../assets/iconAuth/logo.png')}></Image>
        {user != null ? (
          <>
            <View style={styles.contanierUser}>
              <MaterialCommunityIcons
                name="account-circle"
                // color={mainColor}
                size={30}></MaterialCommunityIcons>
              <Text style={styles.nameUser}>{user ? user.name : null}</Text>
            </View>
            <TouchableOpacity>
              <Text>Xem trang cá nhân</Text>
            </TouchableOpacity>
          </>
        ) : null}
      </View>
      <DrawerItemList {...props} />
      {user != null ? (
        <TouchableOpacity
          onPress={() => {
            Logout();
          }}>
          <View style={styles.containerLogout}>
            <MaterialCommunityIcons
              name="logout"
              color={'#30A2FF'}
              size={20}></MaterialCommunityIcons>
            <Text style={styles.nameFeature}>Log out</Text>
          </View>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Login');
          }}>
          <View style={styles.containerLogout}>
            <MaterialCommunityIcons
              name="login"
              color={'#30A2FF'}
              size={20}></MaterialCommunityIcons>
            <Text style={styles.nameFeature}>Login</Text>
          </View>
        </TouchableOpacity>
      )}
    </DrawerContentScrollView>
  );
};

const DrawerNavigator = () => {
  const navigation = useNavigation();
  const Drawer = createDrawerNavigator();
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
      initialRouteName="Home"
      screenOptions={{headerShown: true}}
      drawerContent={(props: any) => <CustomDrawer navigation={navigation} {...props} />}
    >
      <Drawer.Screen
        name="Home"
        component={BottomTab}
        options={headerOptions, {
          drawerLabel: () => (
            <ItemDrawer nameIcon="home" nameFeature="Trang chủ" />
          ),
        }}
        
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
        name="Settings"
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
        component={Profile}
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
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  nameUser: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
  },
  nameFeature: {
    fontSize: 15,
    color: 'black',
    fontWeight: 'bold',
  },
});
