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
import Zocial from 'react-native-vector-icons/Zocial';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

interface getProfile {
    id: number;
    email: string;
    name: string;
    avatar: string;
    phone: string;
}
const EditProfiles = ({ navigation }: any) => {

    const { user } = useGetUser();

    return (
        <View style={styles.profileContainer}>
            <TouchableOpacity style={styles.iconBack} onPress={() => navigation.goBack()}>
                <Image
                    source={require('../assets/CompareInterface-icon/Iconback.png')}>
                </Image>
            </TouchableOpacity>
            <View style={styles.headerProfile}>
                <View>
                    <Text style={styles.profileText}>Tài khoản</Text>
                </View>
                <View style={styles.profileImage}>
                    <Image
                        style={styles.userProfileImage}
                        source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-gcQt4cLfOtecrvODooKFD6cRWVUsX5yGjQ&usqp=CAU' }}
                    />
                    <TouchableOpacity>
                        <Entypo style={{ marginLeft: 120, bottom: 20 }} name='camera' size={20} color='#32ff7e' />
                    </TouchableOpacity>
                </View>
                <View style={styles.profileName}>
                    <Text style={styles.textName}>{user?.name}</Text>
                </View>
                <View style={styles.profileEmail}>
                    <Text style={styles.email}>{user?.email}</Text>
                </View>
            </View>

            <View style={styles.componentInfo}>
                <View style={styles.componentUserName}>
                    <Entypo style={styles.userNameIcon} name='user' size={25} color={'#7052ff'} />
                    <View style={styles.userNameGroup}>
                        <TextInput style={{ color: '#C3C7C7' }}>{user?.name}</TextInput>
                    </View>
                </View>
                <View style={styles.componentUserName}>
                    <Zocial style={styles.userNameIcon} name="email" size={30} color="#7052ff"></Zocial>
                    <View style={styles.userNameGroup}>
                        <TextInput numberOfLines={1} style={{ color: '#C3C7C7', width: '90%' }}>{user?.email}</TextInput>
                    </View>
                </View>
                <View style={styles.componentUserName}>
                    <AntDesign style={styles.userNameIcon} name="phone" size={30} color="#7052ff" />
                    <View style={styles.userNameGroup}>
                        <TextInput style={{ color: '#C3C7C7' }}>08754566878</TextInput>
                    </View>
                </View>
                <View style={styles.fcUpdate}>
                    <TouchableOpacity style={{ flexDirection: 'row', alignSelf: 'center' }}>
                        <Text style={styles.textUpdate}>Cập nhật</Text>
                    </TouchableOpacity>
                </View>
            </View>


        </View>
    );
};


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
        fontSize: 18,
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
        alignItems: 'center'
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
    fcUpdate: {
        borderRadius: 25,
        alignSelf: 'center',
        backgroundColor: '#156CF7',
        marginVertical: 35,
        width: '85%',
    },
    textUpdate: {
        fontWeight: 'bold',
        fontSize: 18,
        marginVertical: 15,
        textAlign: 'center',
        color: '#fff'
    },
    componentUserName: {
        display: 'flex',
        flexDirection: 'row',
        margin: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#BA8F8F'
    },
    componentInfo: {
        display: 'flex',
        flexDirection: 'column',
        marginVertical: 280,
        marginHorizontal: 20,
        width: 350,
        borderRadius: 10,
    },
    userNameIcon: {
        alignSelf: 'center',
        left: 15
    },
    userNameGroup: {
        marginHorizontal: 25,
        marginVertical: 10,
        width: '90%'
    },
});

export default EditProfiles;