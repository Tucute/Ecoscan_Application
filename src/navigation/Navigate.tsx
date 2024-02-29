import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProductDetails from '../screen/ProductDetails';
import Home from '../screen/Home';
import LandingPage from '../screen/auth/LandingPage';
import Login from '../screen/auth/Login';
import Register from '../screen/auth/Register';
import DetailProduct from '../screen/DetailProduct';
import Test from '../test';
import History from '../screen/History';
import BottomTab from './BottomTab';
import CompareInterface from '../screen/CompareInterface';

const Stack = createNativeStackNavigator();

const Navigate = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
          name="BottomTab"
          component={BottomTab}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="LandingPage"
          component={LandingPage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="DetailProduct"
          component={DetailProduct}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Compare"
          component={CompareInterface}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="test"
          component={Test}
          options={{headerShown: false}}
        />

        {/* <Stack.Screen name="productDetail" component={ProductDetails} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigate;
