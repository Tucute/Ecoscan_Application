import React, {useEffect, useState} from 'react';
import MapView, {Marker} from 'react-native-maps';
import {
  ActivityIndicator,
  Alert,
  Button,
  PermissionsAndroid,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import MapViewDirections from 'react-native-maps-directions';
import axios from 'axios';
import {boolean} from 'yup';
interface ShopLocation {
  shopName?: string;
  address?: string | undefined;
  latitude: string;
  longitude: string;
}
interface CurrentLocation {
  address?: string;
  latitude: number;
  longitude: number;
}
interface MapsView {
  data: ShopLocation;
}

const MapsView = ({data}: MapsView) => {
  const GOOGLE_MAPS_APIKEY = 'AIzaSyB39iGJdn-YNRymVVQ1xX09KP3VaAjhk74';
  const [isLoading, setIsLoading] = useState(false);
  const [currentLocation, setCurrentLocation] = useState<CurrentLocation>();
  const [destination, setDestination] = useState({
    address: data.address,
    shopName: data.shopName,
    latitude: parseFloat(data.latitude),
    longitude: parseFloat(data.longitude),
  });

  const requestCameraPermission = async () => {
    try {
      setIsLoading(true);
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'App Location Permission',
          message: 'Map needs access to your Location ',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        getCurrentLocation();
      } else {
        console.log('Location permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const getCurrentLocation = () => {
    Geolocation.getCurrentPosition(
      (info: any) => {
        const {latitude, longitude} = info.coords;
        setCurrentLocation({latitude, longitude});
      },
      (error: any) => Alert.alert('Error', error.message),
      {enableHighAccuracy: false, setTimeout: 3000, maximumAge: 10000},
    );
    setIsLoading(false);
  };

  const fetchCurrentLocation = async () => {
    try {
      const respon = await axios.get(
        `https://us1.locationiq.com/v1/reverse?key=pk.8d9318f063a56e90900ec9c914c24baf&lat=${destination.latitude}&lon=${destination.longitude}&format=json&`,
      );
      console.log('DATA', respon.data.display_name);
      const {lat, lon, display_name, type} = respon.data;
      setDestination(pre => ({
        ...pre,
        address: display_name,
      }));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    requestCameraPermission();
    getCurrentLocation();
    fetchCurrentLocation();
  }, []);

  if (isLoading) {
    return (
      <View style={{flex: 1}}>
        <ActivityIndicator size="large" color="#00ff00" />
      </View>
    );
  }
  return (
    <View style={{flex: 1}}>
      {currentLocation ? (
        <MapView
          style={{
            width: '100%',
            height: '100%',
          }}
          initialRegion={{
            latitude: currentLocation.latitude,
            longitude: currentLocation.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}>
          <Marker
            coordinate={{
              latitude: currentLocation.latitude,
              longitude: currentLocation.longitude,
            }}
            title="Current your location"
            description={currentLocation.address}>
            <View style={styles.imageMarkerContainers}>
              <View style={styles.address}></View>
            </View>
          </Marker>
          <Marker
            title={destination.address}
            coordinate={{
              latitude: destination.latitude,
              longitude: destination.longitude,
            }}
          />
          <MapViewDirections
            origin={currentLocation}
            destination={destination}
            apikey={GOOGLE_MAPS_APIKEY}
            strokeWidth={3}
            strokeColor="hotpink"
          />
        </MapView>
      ) : (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          {/* <Text style={{fontSize: 16, fontWeight: 'bold', color: '#fff'}}>
            Please grant access to use the map
          </Text> */}
          <View style={{flex: 1}}>
            <ActivityIndicator size="large" color="#00ff00" />
          </View>
        </View>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  imageMarkerContainers: {
    width: 30,
    height: 30,
    borderRadius: 30,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  address: {
    width: 20,
    height: 20,
    borderRadius: 30,
    backgroundColor: 'red',
  },
});

export default MapsView;
