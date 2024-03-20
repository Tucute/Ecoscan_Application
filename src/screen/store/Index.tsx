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
import ItemStore from './ItemStore';
import MapsView from './MapView';

export default function Store({ navigation, route }: any) {
    const {data} = route.params;
    const handleFllow = () => {
        Alert.alert('Oke m');
    };
    const [selectedTab, setSelectedTab] = useState('MAP');
    const handleMessage = () => {
        Alert.alert('Oke m');
    };
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={require('../../assets/CompareInterface-icon/Iconback.png')}></Image>
                </TouchableOpacity>
            </View>

            <View style={styles.profile}>
            <Image style={{ width: 100, height: 100, borderRadius: 100, }} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1CKV1qQbHFwMNC86w5HKXruYHMEQip5rHYAgqfdSH732oRE8LIYLSF3VelgvVf0P8OtQ&usqp=CAU' }} />
                <Text style={styles.profileName}>{data.shopName}</Text>
                <Text style={styles.itemNumber}>
                    <Text style={{fontWeight: 'bold'}}>Phone:</Text> {data.phone}
                </Text>
                <Text style={styles.titleMedium}>
                    <Text style={{fontWeight: 'bold'}}>Address:</Text> {data.address}
                </Text>
            </View>
            <View style={styles.actionInteraction}>
                {/* <Button
                    title="Rating"
                    onPress={handleFllow}
                />
                <Button
                    title="Message"
                    onPress={handleMessage}
                /> */}
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
            </View>
            {selectedTab === 'MAP' && <MapsView data={data}/>}
            {selectedTab === 'ITEMSTORE' && <ItemStore data={data}/>}
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
        paddingHorizontal: 5,
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
