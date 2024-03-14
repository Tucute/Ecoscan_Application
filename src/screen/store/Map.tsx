import React, {useEffect, useState} from 'react';
import {
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
// import { mainColor } from '../common/colors';
import axios from 'axios';
import Geolocation from '@react-native-community/geolocation';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

interface Result {
  lat: number;
  lon: number;
  display_name: string;
  type: string;
}

export const Maps = () => {
  const [currentLocation, setCurrentLocation] = useState<Result>();
  const [LATITUDE, setLATITUDE] = useState(16.0544);
  const [LONGITUDE, setLONGITUDE] = useState(108.2022);
  const [isCurrentLocation, setIsCurrentLocation] = useState(false);

  const [INITIAL_POSITION, setInitialPosition] = useState({
    latitude: LATITUDE,
    longitude: LONGITUDE,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const fetchCurrentLocation = async () => {
    try {
      const respon = await axios.get(
        `https://us1.locationiq.com/v1/reverse?key=pk.8d9318f063a56e90900ec9c914c24baf&lat=${LATITUDE}&lon=${LONGITUDE}&format=json&`,
      );
      console.log('DATA: ', respon.data.display_name);
      const {lat, lon, display_name, type} = respon.data;
      setCurrentLocation({
        lat: parseFloat(lat),
        lon: parseFloat(lon),
        display_name,
        type,
      });
      console.log('vị trí hiện tại: ', currentLocation);
      setIsCurrentLocation(true);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (LATITUDE != 0 || LONGITUDE != 0) {
      fetchCurrentLocation();
      if (currentLocation != null && isCurrentLocation == true) {
        setInitialPosition({
          ...INITIAL_POSITION,
          latitude: currentLocation.lat,
          longitude: currentLocation.lon,
        });
      }
      console.log('current Location: ', currentLocation);
    }
  }, [currentLocation, LATITUDE]);

  return (
    <View style={{flex: 1}}>
      <MapView style={styles.map} region={INITIAL_POSITION}>
        {
          currentLocation? <Marker
          key={12222}
          coordinate={{
            latitude: currentLocation.lat,
            longitude: currentLocation.lon,
          }}
          title={currentLocation.display_name}
        />
        : null
        }
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  map: {
    width: '100%',
    height: '100%',
  },
  Containerinput: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 10,
  },
  input: {
    maxWidth: 300,
  },
  searchBar: {
    position: 'absolute',
    height: '20%',
    width: '90%',
    padding: 8,
    alignSelf: 'center',
    marginTop: 20,
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'grey',
  },
  button: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  title: {
    color: 'white',
    padding: 10,
    fontWeight: 'bold',
  },
  ContainerSelectButton: {
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
    backgroundColor: '#FB3D56',
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
  },
  titleBottomButton: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
    padding: 15,
  },
});

export default Maps;
