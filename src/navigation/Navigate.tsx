import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProductDetails from '../screen/ProductDetails';
import Home from '../screen/Home';
import LandingPage from '../screen/auth/LandingPage';
import Login from '../screen/auth/Login';
import Register from '../screen/auth/Register';
import DetailProduct from '../screen/DetailProduct';
const Stack = createNativeStackNavigator();

const Navigate = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
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
        {/* <Stack.Screen name="productDetail" component={ProductDetails} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigate;
