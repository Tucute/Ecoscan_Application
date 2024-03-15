import React, {useEffect, useState} from 'react';
import MapView, {Marker} from 'react-native-maps';
import {
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
interface Location {
  latitude: number;
  longitude: number;
}
const MapsView = () => {
  const GOOGLE_MAPS_APIKEY = 'AIzaSyB39iGJdn-YNRymVVQ1xX09KP3VaAjhk74';
  const [currentLocation, setCurrentLocation] = useState<Location>();
  const [destination, setDestination] = useState({
    latitude: 16.06249,
    longitude: 108.24196,
  });

  const requestCameraPermission = async () => {
    try {
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
        console.log('You can use the Location');
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
      position => {
        const {latitude, longitude} = position.coords;
        console.log('coords', position.coords);

        setCurrentLocation({latitude, longitude});
        console.log('data ở đây: ', latitude, longitude);
      },
      error => Alert.alert('Error', error.message),
      {enableHighAccuracy: true, maximumAge: 10000},
    );
  };

  useEffect(() => {
    requestCameraPermission();
    Geolocation.getCurrentPosition(info => {
      setCurrentLocation(info.coords);
    });
  }, []);
  console.log('currentLocation: ', currentLocation);

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
          />
          <Marker
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
        <Text>Không có dữ liệu</Text>
      )}
    </View>
  );
};

export default MapsView;
