import React from "react";
import { View, StyleSheet, TouchableOpacity, Image, Text } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import useGetUser from "../hook/useGetUser";

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
                    <Text style={{ fontSize: 26, color: '#fff', fontWeight: 'bold' }}>Ho Thi Kieu</Text>
                </View>
            </View>
            <View style={styles.componentInfo}>
                <View style={styles.componentUserName}>
                    <Image style={styles.userNameIcon}
                        source={require('../assets/ViewProfile/userIcon.png')}></Image>
                    <View style={styles.userNameGroup}>
                        <TextInput style={{color: '#C3C7C7'}}>{user?.name}</TextInput>
                    </View>
                </View>
                <View style={styles.componentUserName}>
                    <Image style={styles.userNameIcon}
                        source={require('../assets/ViewProfile/emailIcon.png')}></Image>
                    <View style={styles.userNameGroup}>
                        <TextInput numberOfLines={1} style={{color: '#C3C7C7', width: '90%'}}>{user?.email}</TextInput>
                    </View>
                </View>
                <View style={styles.componentUserName}>
                    <Image style={styles.userNameIcon}
                        source={require('../assets/ViewProfile/passwordIcon.png')}></Image>
                    <View style={styles.userNameGroup}>
                        <TextInput style={{color: '#C3C7C7'}}>08754566878</TextInput>
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
        left: 30,
        marginVertical: 10,
        width: '90%'
    },
});

export default EditProfile;
