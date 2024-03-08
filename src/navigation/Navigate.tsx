import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screen/Home';
import LandingPage from '../screen/auth/LandingPage';
import Login from '../screen/auth/Login';
import Register from '../screen/auth/Register';
import DetailProduct from '../screen/DetailProduct';
import Test from '../Profile';
import History from '../screen/History';
import BottomTab from './BottomTab';
import CompareInterface from '../screen/CompareInterface';
import DrawerNavigator from './DrawerNavigation';
import RecyclingIns from '../screen/RecycleIns';
import Store from '../screen/store/Index';
import Setting from '../screen/Setting';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const Stack = createNativeStackNavigator();

const Navigate = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Setting"
          component={Setting}
          options={{ headerShown: false }}
        />
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
          name="Bottomtab"
          component={BottomTab}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Root"
          component={DrawerNavigator}
          options={{headerShown: false}}
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
          name="store"
          component={Store}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Recycle"
          component={RecyclingIns}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="BottomTab"
          component={BottomTab}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="test"
          component={Test}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default Navigate;
