import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProductDetails from '../screen/ProductDetails';
import Home from '../screen/Home';
const Stack = createNativeStackNavigator();

const Navigate = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="productDetail" component={ProductDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigate;
