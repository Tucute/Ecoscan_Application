import React from "react";
import { View, StyleSheet, TouchableOpacity, Image, Text } from "react-native";
import useGetUser from "../hook/useGetUser";
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'

import Icon from 'react-native-vector-icons/FontAwesome';

const ViewProfile = ({ navigation, route }: any) => {
    const { user } = useGetUser();

    return (
        <View style={styles.container}>
            <View style={styles.background}>
                <Image
                    style={styles.backgroundImage}
                    source={require('../assets/ViewProfile/UserProfile.jpg')}
                />
            </View>

            <TouchableOpacity style={styles.iconBack}>
                <Image
                    style={styles.icBack}
                    source={require('../assets/CompareInterface-icon/Iconback.png')}
                />
            </TouchableOpacity>

            <View style={styles.userProfile}>
                <Image
                    style={styles.userProfileImage}
                    source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQICxfD-OKd7xoKOUmfau9JHOXhpmm8r3-UQQ&usqp=CAU' }}
                />
                <TouchableOpacity onPress={() => navigation.navigate('EditProfile')}>
                    <Text style={styles.edit}>Edit</Text>
                </TouchableOpacity>
                <View>
                    <Text style={{ fontSize: 26, color: '#fff', fontWeight: 'bold' }}>{user?.name}</Text>
                </View>
            </View>
            <View style={styles.componentInfo}>
                <View style={styles.componentUserName}>
                    <AntDesign style={styles.iconInfo} name="user" size={30} color="#B3CB1D" />
                    <View style={styles.userNameGroup}>
                        <Text style={styles.userNameTitle}>User Name</Text>
                        {user && user.name ? (
                            <Text style={{color: '#C3C7C7'}}>{user?.name}</Text>
                        ) : (
                            <Text style={{color: 'red'}}>User name not found!</Text>
                        )}
                    </View>
                </View>
                <View style={styles.componentUserName}>
                    <Entypo style={styles.iconInfo} name="mail" size={30} color="#B3CB1D"></Entypo>
                    <View style={styles.userNameGroup}>
                        <Text style={styles.userNameTitle}>Email</Text>
                        {user && user.email ? (
                            <Text numberOfLines={1} style={{ color: '#C3C7C7', width: '90%' }}>{user?.email}</Text>
                        ) : (
                            <Text style={{ color: 'red', width: '90%' }}>Email not available</Text>
                        )}
                    </View>
                </View>
                
                <View style={styles.componentUserName}>
                    <AntDesign style={styles.iconInfo} name="phone" size={30} color="#B3CB1D" />
                    <View style={styles.userNameGroup}>
                        <Text style={styles.userNameTitle}>Phone</Text>
                        {user && user.phone ? (
                            <Text style={{color: '#C3C7C7'}}>{user?.phone}</Text>
                        ) : (
                            <Text style={{color: 'red'}}>Phone number not found!</Text>
                        )}
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    background: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        alignItems: 'center',
    },
    backgroundImage: {
        resizeMode: 'cover',
        flex: 1,
    },
    iconBack: {
        position: 'absolute',
        top: 20,
        left: 20,
    },
    icBack: {
        width: 50,
        height: 50,
    },
    userProfile: {
        position: 'absolute',
        bottom: 380,
        alignSelf: 'center',
        alignItems: 'center'
    },
    userProfileImage: {
        width: 200,
        height: 200,
        borderRadius: 100
    },
    edit: {
        fontSize: 18,
        backgroundColor: 'red',
        width: 50,
        textAlign: 'center',
        borderRadius: 5,
        bottom: 15
    },
    componentUserName: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#333333',
        margin: 10,
        borderRadius: 10,
    },
    componentInfo: {
        display: 'flex',
        flexDirection: 'column',
        marginVertical: 350,
        alignSelf: 'center',
        borderRadius: 10,
    },
    iconInfo: {
        alignSelf: 'center',
        left: 15,
    },
    userNameGroup: {
        left: 30,
        marginVertical: 10,
        width: '90%'
    },
    userNameTitle: {
        fontSize: 16,
        color: '#fff',
        fontWeight: 'bold'
    },
});

export default ViewProfile;
