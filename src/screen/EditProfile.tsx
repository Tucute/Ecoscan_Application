import React from "react";
import { View, StyleSheet, TouchableOpacity, Image, Text } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import useGetUser from "../hook/useGetUser";
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo'

const EditProfile = ({navigation, route}:any) => {
    const {user} = useGetUser();
    return (
        <View style={styles.container}>
            <View style={styles.background}>
                <Image
                    style={styles.backgroundImage}
                    source={require('../assets/ViewProfile/UserProfile.jpg')}
                />
            </View>

            <TouchableOpacity style={styles.iconBack} onPress={() => navigation.goBack()}>
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
                <TouchableOpacity>
                    <Image style={styles.edit} source={require('../assets/ViewProfile/cameraIcon.png')}></Image>
                </TouchableOpacity>
                <View>
                    <Text style={{ fontSize: 26, color: '#fff', fontWeight: 'bold' }}>{user?.name}</Text>
                </View>
            </View>
            <View style={styles.componentInfo}>
                <View style={styles.componentUserName}>
                    <AntDesign style={styles.userNameIcon} name="user" size={30} color="#B3CB1D"></AntDesign>
                    <View style={styles.userNameGroup}>
                        <TextInput style={{color: '#C3C7C7'}}>{user?.name}</TextInput>
                    </View>
                </View>
                <View style={styles.componentUserName}>
                    <Entypo style={styles.userNameIcon} name="mail" size={30} color="#B3CB1D"></Entypo>
                    <View style={styles.userNameGroup}>
                        <TextInput numberOfLines={1} style={{color: '#C3C7C7', width: '90%'}}>{user?.email}</TextInput>
                    </View>
                </View>
                <View style={styles.componentUserName}>
                    <AntDesign style={styles.userNameIcon} name="phone" size={30} color="#B3CB1D" />
                    <View style={styles.userNameGroup}>
                        <TextInput style={{color: '#C3C7C7'}}>08754566878</TextInput>
                    </View>
                </View>
            </View>
            <View style={styles.fcUpdate}>
                <TouchableOpacity>
                    <Text style={styles.textUpdate}>Update</Text>
                </TouchableOpacity>
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
        bottom: 450,
        alignSelf: 'center',
        alignItems: 'center'
    },
    userProfileImage: {
        width: 200,
        height: 200,
        borderRadius: 100
    },
    edit: {
        width: 100,
        height: 30,
        bottom: 30,
        left: 50
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
    fcUpdate: {
        bottom: 60,
        borderRadius: 10,
        position: 'absolute',
        alignSelf: 'center',
        backgroundColor: '#B2CA1F',
    },
    textUpdate: {
        fontWeight: 'bold',
        fontSize: 18,
        marginVertical: 10,
        marginHorizontal: 30,
    }
});

export default EditProfile;
