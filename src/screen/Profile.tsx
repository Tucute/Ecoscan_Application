import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Modal,
  Alert,
  TextInput,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useQuery, useMutation } from '@tanstack/react-query';
import axios from 'axios';
import useGetUser from '../hook/useGetUser';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import useLogout from '../hook/useLogout';

interface getProfile {
  id: number;
  email: string;
  name: string;
  avatar: string;
  phone: string;
}
const Profile = ({ navigation }: any) => {
  const { user } = useGetUser();
  const { Logout } = useLogout({ navigation });

  const [editting, setEditting] = useState(false);
  const [nameUser, setNameUser] = useState(user?.name);  
  
  useEffect(() => {
    setNameUser(user?.name);
  },[user])

  const handleSavePess = () => {
    setEditting(false);
  }

  const handleSetEdit = () => {
    setEditting(true)
  }

  return (
    <View style={styles.profileContainer}>
      <TouchableOpacity style={styles.iconBack} onPress={() => navigation.goBack()}>
        <Image
          source={require('../assets/CompareInterface-icon/Iconback.png')}>
        </Image>
      </TouchableOpacity>
      <View style={styles.headerProfile}>
        <View>
          <Text style={styles.profileText}>Profile</Text>
        </View>
        <View style={styles.profileImage}>
          <Image
            style={styles.userProfileImage}
            source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-gcQt4cLfOtecrvODooKFD6cRWVUsX5yGjQ&usqp=CAU' }}
          />
          <TouchableOpacity>
            <Entypo style={{ marginLeft: 120, bottom: 25 }} name='camera' size={25} color='#32ff7e' />
          </TouchableOpacity>
        </View>
        <View style={{ bottom: 10 }}>
          <View style={styles.profileName}>
            {editting ? (
              <TextInput
                style={styles.textName}
                value={nameUser}
                onChangeText={(text) => setNameUser(text)}
                onBlur={handleSavePess}
                autoFocus={true}
              />
            ) : (
              <Text style={styles.textName}>{nameUser}</Text>
            )}
            <TouchableOpacity onPress={editting ? handleSavePess : handleSetEdit}>
              <Feather style={{ marginLeft: 10 }} name={editting ? 'check' : 'edit'} size={20} color='#32ff7e' />
            </TouchableOpacity>
          </View>
          <View style={styles.profileEmail}>
            <Text style={styles.email}>{user?.email}</Text>
          </View>
        </View>
      </View>

      <View style={styles.componentInfo}>
        <TouchableOpacity style={styles.componentAccount}>
          <Entypo style={{ alignSelf: 'center' }} name='user' size={25} color={'#7052ff'} />
          <Text style={{ color: '#fff', fontSize: 20, alignSelf: 'center', marginRight: 130 }}>Account</Text>
          <MaterialIcons style={{ alignSelf: 'center' }} name='navigate-next' size={30} color='#fff' />
        </TouchableOpacity>

        <TouchableOpacity style={styles.componentAccount}>
          <Feather style={{ alignSelf: 'center' }} name='settings' size={25} color={'#7052ff'} />
          <Text style={{ color: '#fff', fontSize: 20, alignSelf: 'center', marginRight: 130 }}>Settings</Text>
          <MaterialIcons style={{ alignSelf: 'center' }} name='navigate-next' size={30} color='#fff' />
        </TouchableOpacity>

        <TouchableOpacity style={styles.componentAccount}>
          <Entypo style={{ alignSelf: 'center' }} name='users' size={25} color={'#7052ff'} />
          <Text style={{ color: '#fff', fontSize: 20, alignSelf: 'center', marginRight: 130 }}>About Us</Text>
          <MaterialIcons style={{ alignSelf: 'center' }} name='navigate-next' size={30} color='#fff' />
        </TouchableOpacity>
      </View>

      <View style={styles.fcSignOut}>
        <TouchableOpacity onPress={Logout} style={{ flexDirection: 'row', alignSelf: 'center' }}>
          <Text style={styles.textSignOut}>Sign out</Text>
          <FontAwesome style={{ alignSelf: 'center', marginLeft: 10 }} name='sign-out' size={30} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  profileContainer: {
    flex: 1,
    backgroundColor: '#333',
  },
  iconBack: {
    marginHorizontal: 20,
    marginTop: 20,
    borderRadius: 15,
  },
  headerProfile: {
    width: 200,
    alignSelf: 'center',
    position: 'absolute',
    marginVertical: 30
  },
  profileText: {
    color: "#fff",
    fontSize: 20,
    textAlign: 'center'
  },
  profileImage: {
    marginVertical: 20,
  },
  userProfileImage: {
    width: 120,
    height: 120,
    borderRadius: 100,
    alignSelf: 'center'
  },
  profileName: {
    alignItems: 'center',
    flexDirection: 'row',
    marginLeft: 20
  },
  profileEmail: {
    alignItems: 'center',
    marginVertical: 5
  },
  email: {
    color: '#C3C7C7'
  },
  textName: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
  componentInfo: {
    top: 260,
  },
  styleUser: {
    borderRadius: 100,
    width: 100,
    alignSelf: 'center',
    // marginLeft: 60
  },
  componentAccount: {
    backgroundColor: '#3E3D3D',
    flexDirection: 'row',
    borderRadius: 15,
    width: "85%",
    height: 60,
    shadowColor: 'rgba(0, 0, 0, 0.5)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 4,
    marginVertical: 10,
    justifyContent: 'space-evenly',
    marginHorizontal: 30,
  },
  fcSignOut: {
    top: 300,
    borderRadius: 25,
    alignSelf: 'center',
    backgroundColor: '#fff',
    width: '85%',
  },
  textSignOut: {
    fontWeight: 'bold',
    fontSize: 18,
    marginVertical: 15,
    textAlign: 'center',
  }
});
