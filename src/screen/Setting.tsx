import { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Image, Dimensions, Text } from "react-native";
import { Switch } from "react-native-gesture-handler";

const Setting = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    const [isBeepEnabled, setIsBeepEnabled] = useState(false);
    const beepSwitch = () => setIsBeepEnabled(previousState => !previousState);

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.iconBack}>
                <Image
                    style={styles.icBack}
                    source={require('../assets/CompareInterface-icon/Iconback.png')}>
                </Image>
            </TouchableOpacity>
            <View>
                <View>
                    <Text style={styles.setting}>Settings</Text>
                </View>
                <View style={styles.componentVibrate}>
                    <Image style={styles.iconVibrate}
                        source={require('../assets/IconSetting/Vibrate.png')}></Image>
                    <View style={styles.textVibrate}>
                        <Text style={styles.Vibrate}>Vibate</Text>
                        <Text style={styles.textContent}>Vibration when scan is done.</Text>
                    </View>
                    <Switch
                    style={{marginHorizontal: 100}}
                        trackColor={{ false: '#767577', true: '#81b0ff' }}
                        thumbColor={isEnabled ? '#f5dd4b' : '#fff'}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />
                </View>
                <View style={styles.componentBeep}>
                    <Image style={styles.iconVibrate}
                        source={require('../assets/IconSetting/Beep.png')}></Image>
                    <View style={styles.textVibrate}>
                        <Text style={styles.Vibrate}>Beep</Text>
                        <Text style={styles.textContent}>Beep when scan is done.</Text>
                    </View>
                    <Switch
                        style={{marginHorizontal: 120}}
                        trackColor={{ false: '#767577', true: '#81b0ff' }}
                        thumbColor={isBeepEnabled ? '#f5dd4b' : '#fff'}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={beepSwitch}
                        value={isBeepEnabled}
                    />
                </View>
            </View>
            <View>
                <View style={styles.supportTitle}>
                    <Text style={{
                        color: '#B3CB1D',
                        fontWeight: 'bold',
                        fontSize: 20,
                        marginHorizontal: 30
                    }}>
                        Support
                    </Text>
                </View>
                <View style={styles.bodySupport}>
                    <View style={styles.rateUs}>
                        <Image style={styles.iconVibrate}
                            source={require('../assets/IconSetting/completed.png')}></Image>
                        <View style={styles.textVibrate}>
                            <Text style={styles.Vibrate}>Rate Us</Text>
                            <Text style={styles.textContent}>Your best reward to us.</Text>
                        </View>
                    </View>
                    <View style={{ borderBottomWidth: 1, borderBottomColor: '#C3C7C7', width: '100%' }}></View>
                    <View style={styles.share}>
                        <Image style={styles.iconVibrate}
                            source={require('../assets/IconSetting/ic-share.png')}></Image>
                        <View style={styles.textVibrate}>
                            <Text style={styles.Vibrate}>Share</Text>
                            <Text style={styles.textContent}>Share app with others.</Text>
                        </View>
                    </View>
                    <View style={{ borderBottomWidth: 1, borderBottomColor: '#C3C7C7', width: '100%' }}></View>
                    <View style={styles.privacyPolicy}>
                        <Image style={styles.iconVibrate}
                            source={require('../assets/IconSetting/privacy.png')}></Image>
                        <View style={styles.textVibrate}>
                            <Text style={styles.Vibrate}>Privacy Policy</Text>
                            <Text style={styles.textContent}>Follow our policies that benefits you.</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#333333',
        opacity: 0.8
    },
    iconBack: {
        marginVertical: 30,
        marginHorizontal: 30,
    },
    icBack: {
        backgroundColor: '#B3CB1D',
        borderRadius: 100
    },
    setting: {
        color: '#B3CB1D',
        fontWeight: 'bold',
        fontSize: 20,
        marginHorizontal: 30
    },
    componentVibrate: {
        display: 'flex',
        flexDirection: 'row',
        top: 25,
        marginVertical: 15,
        marginHorizontal: 20,
        backgroundColor: '#333333',
        width: 350,
        borderRadius: 10,
    },
    iconVibrate: {
        alignSelf: 'center',
        left: 15
    },
    textVibrate: {
        left: 30,
        marginVertical: 10
    },
    Vibrate: {
        fontSize: 18,
        color: '#fff',
    },
    textContent: {
        color: '#fff',
    },
    componentBeep: {
        display: 'flex',
        flexDirection: 'row',
        marginVertical: 30,
        marginHorizontal: 20,
        backgroundColor: '#333333',
        width: 350,
        borderRadius: 10,
    },
    rateUs: {
        display: 'flex',
        flexDirection: 'row',
        width: 300,
        borderRadius: 10,
    },
    share: {
        display: 'flex',
        flexDirection: 'row',
        width: 300,
        borderRadius: 10,
    },
    privacyPolicy: {
        display: 'flex',
        flexDirection: 'row',
        width: 300,
        borderRadius: 10,
    },
    bodySupport: {
        display: 'flex',
        flexWrap: 'wrap',
        marginVertical: 30,
        marginHorizontal: 20,
        backgroundColor: '#333333',
        width: 350,
        borderRadius: 10,
    }
});

export default Setting;
