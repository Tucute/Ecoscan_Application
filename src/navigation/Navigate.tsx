import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LandingPage from '../screen/auth/LandingPage';
import Login from '../screen/auth/Login';
import Register from '../screen/auth/Register';
import DetailProduct from '../screen/DetailProduct';
import CompareInterface from '../screen/CompareInterface';
import DrawerNavigator from './DrawerNavigation';
import RecyclingIns from '../screen/RecycleIns';
import Store from '../screen/store/Index';
import Setting from '../screen/Setting';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Notification from '../screen/Notification';
import Profile from '../Profile';
import ViewProfile from '../screen/ViewProfile';
import EditProfile from '../screen/EditProfile';
import Maps from '../screen/store/Map';
import MapsView from '../screen/store/MapView';

const Stack = createNativeStackNavigator();

const Navigate = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator>

          <Stack.Screen
            name="LandingPage"
            component={LandingPage}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Register"
            component={Register}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Root"
            component={DrawerNavigator}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="DetailProduct"
            component={DetailProduct}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Compare"
            component={CompareInterface}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Recycle"
            component={RecyclingIns}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Store"
            component={Store}
            options={{ headerShown: false }}
          />
          {/* <Stack.Screen
          name="Recycle"
          component={RecyclingIns}
          options={{ headerShown: false }}
        /> */}
          <Stack.Screen
            name="profile"
            component={Profile}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Setting"
            component={Setting}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Notification"
            component={Notification}
            options={{ headerShown: true }}
          />
          <Stack.Screen
            name="ViewProfile"
            component={ViewProfile}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="EditProfile"
            component={EditProfile}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default Navigate;
