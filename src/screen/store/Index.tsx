import React, { useState } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image,
    TouchableOpacity,
    Alert,
    Button,
} from 'react-native';
// import ButtonProfile from '../../components/ButtonProfile';
// import ButtonProfile2 from '../../components/ButtonProfile2';
// import HeaderProfile from '../../components/HeaderProfile';
// import {NavigateType} from '../../models/Navigations';
import ItemStore from './ItemStore';
import Map from './Map';
// import ReviewScreen from './ReviewScreen';

export default function Store({ navigation }: any) {
    const handleFllow = () => {
        Alert.alert('Oke m');
    };
    const [selectedTab, setSelectedTab] = useState('ABOUT');
    const handleMessage = () => {
        console.log('fsdfsdfsd');

    };
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                {/* <HeaderProfile navigation={navigation} /> */}
                <TouchableOpacity>
                    <Image source={require('../../assets/CompareInterface-icon/Iconback.png')}></Image>
                </TouchableOpacity>
            </View>

            <View style={styles.profile}>
            <Image style={{ width: 100, height: 100, borderRadius: 100, }} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1CKV1qQbHFwMNC86w5HKXruYHMEQip5rHYAgqfdSH732oRE8LIYLSF3VelgvVf0P8OtQ&usqp=CAU' }} />
                <Text style={styles.profileName}>Vinmart</Text>
                <Text style={styles.itemNumber}>
                    <Text style={{fontWeight: 'bold'}}>Phone:</Text> 0344463243
                </Text>
                <Text style={styles.titleMedium}>
                    <Text style={{fontWeight: 'bold'}}>Address:</Text> 101B, Le Huu Trac, Phuoc My, Sơn Tra, Da Nang
                </Text>
            </View>
            <View style={styles.actionInteraction}>
                <Button
                    title="Rating"
                    // icon={require('../../assets/CompareInterface-icon/Iconback.png')}
                    onPress={handleFllow}
                />
                <Button
                    title="Message"
                    // icon={require('../../assets/CompareInterface-icon/Iconback.png')}
                    onPress={handleMessage}
                />
            </View>
            <View style={styles.listActions}>
                <TouchableOpacity
                    onPress={() => setSelectedTab('MAP')}
                    style={[styles.tab, selectedTab === 'MAP' && styles.selectedTab]}>
                    <Text style={styles.titleLarge}>MAP</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => setSelectedTab('ITEMSTORE')}
                    style={[
                        styles.tab,
                        selectedTab === 'ITEMSTORE' && styles.selectedTab,
                    ]}>
                    <Text style={styles.titleLarge}>ITEM STORE</Text>
                </TouchableOpacity>
                {/* <TouchableOpacity
          onPress={() => setSelectedTab('REVIEWS')}
          style={[styles.tab, selectedTab === 'REVIEWS' && styles.selectedTab]}>
          <Text style={styles.titleLarge}>REVIEWS</Text>
        </TouchableOpacity> */}
            </View>

            {selectedTab === 'MAP' && <Map />}
            {selectedTab === 'ITEMSTORE' && <ItemStore />}
            {/* {selectedTab === 'REVIEWS' && <ReviewScreen />} */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 5,
        paddingTop: 20,
        backgroundColor: '#333333'
    },
    header: {
        paddingHorizontal: 20,
    },
    profile: {
        alignItems: 'center',
        marginBottom: 16,
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    profileName: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 8,
        color: '#fff',
    },
    numberStatus: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        gap: 10,
    },
    itemfllowing: {
        alignItems: 'center',
    },
    itemfllower: {
        alignItems: 'center',
    },
    itemNumber: {
        fontSize: 16,
        // fontWeight: 'bold',
        color: '#fff',
    },

    titleLarge: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 8,
        color: '#fff',
    },
    interestItem: {
        fontSize: 14,
        marginBottom: 4,
        color: '#120D26',
    },
    titleMedium: {
        fontSize: 14,
        marginBottom: 4,
        color: '#fff',
        opacity: 0.5,
    },
    arrowMiddle: {
        width: 1,
        height: 45,
        backgroundColor: '#120D26',
    },
    interestList: {},
    listActions: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 15,
        paddingHorizontal: 20,

    },
    actionInteraction: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingHorizontal: 20,
    },
    tab: {
        flex: 1,
        alignItems: 'center',
    },
    selectedTab: {
        borderBottomWidth: 2,
        borderColor: '#216C53',
        width: 50,
    },
});
