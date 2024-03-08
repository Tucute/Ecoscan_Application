import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screen/Home';
import History from '../screen/History';
import {Image, StyleSheet, Text, View} from 'react-native';

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
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          headerShown: false,
          tabBarIcon: ({color, size, focused}) => (
            <View style={styles.viewOption}>
              {focused ? (
                <Image
                  style={styles.imageOption}
                  source={require('../assets/iconScanScreen/generate-focused.png')}
                />
              ) : (
                <Image
                  style={styles.imageOption}
                  source={require('../assets/iconScanScreen/generate.png')}
                />
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
                <Image
                  style={styles.imageOption}
                  source={require('../assets/iconScanScreen/history-focused.png')}
                />
              ) : (
                <Image
                  style={styles.imageOption}
                  source={require('../assets/iconScanScreen/history.png')}
                />
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
    justifyContent: 'center',
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
