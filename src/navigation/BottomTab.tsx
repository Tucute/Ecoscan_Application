import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screen/HomeScreen';
import History from '../screen/History';
import {Image, StyleSheet, Text, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from '../screen/HomeScreen';

const Tab = createBottomTabNavigator();

export default function BottomTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
      }}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          headerShown: false,
          tabBarIcon: ({color, size, focused}) => (
            <View style={styles.viewOption}>
              {focused ? (
                // <Image
                //   style={styles.imageOption}
                //   source={require('../assets/iconScanScreen/generate-focused.png')}
                // />
                <MaterialCommunityIcons name='barcode-scan' color={'#B3CB1D'} size={30}></MaterialCommunityIcons>
              ) : (
                <MaterialCommunityIcons name='barcode-scan' color={'#fff'} size={30}></MaterialCommunityIcons>
              )}
              <Text style={styles.textOption}>Generate</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="add"
        component={Home}
        options={{
          tabBarItemStyle: {
            height: 0,
          },
          tabBarButton: () => (
            <Image
              style={styles.image}
              source={require('../assets/iconScanScreen/QrCode.png')}
            />
          ),
        }}
      />
      <Tab.Screen
        name="History"
        component={History}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size, focused}) => (
            <View style={styles.viewOption}>
              {focused ? (
                <MaterialCommunityIcons name='history' color={'#B3CB1D'} size={30}></MaterialCommunityIcons>
              ) : (
                <MaterialCommunityIcons name='history' color={'#fff'} size={30}></MaterialCommunityIcons>
              )}
              <Text style={styles.textOption}>History</Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    padding: 0,
    left: 16,
    right: 16,
    bottom: 16,
    height: 80,
    borderRadius: 16,
    borderTopColor: 'transparent',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: '#333333',
  },
  viewOption: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  imageOption: {
    width: 30,
    height: 30,
  },
  textOption: {
    color: '#fff',
  },
  image: {
    width: 120,
    height: 120,
    top: -50,
  },
});
