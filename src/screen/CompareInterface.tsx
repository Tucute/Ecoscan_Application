import { Image, View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import PriceProductCompare from '../component/ComponentCompare/PriceProductCompare';
import InfoProduct from '../component/ComponentCompare/InfoProduct';
import SimilarStore from '../component/ComponentCompare/SimilarStore';
import TheOrigin from '../component/ComponentCompare/TheOrigin';

const CompareInterface = ({ route }: any) => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.componentCompare}>
                <TouchableOpacity>
                    <Image source={require('../assets/CompareInterface-icon/Iconback.png')}></Image>
                </TouchableOpacity>
                <View style={styles.imageCompare}>
                    <View style={styles.firstProduct}>
                        <Image
                            style={styles.componentImage1}
                            source={require('../assets/CompareInterface-icon/images_1.png')}>
                        </Image>
                        <TouchableOpacity style={styles.componentText}>
                            <Text style={styles.text}>Choose</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.iconCompare}>
                        <Image source={require('../assets/CompareInterface-icon/IconCompare.png')}></Image>
                    </View>
                    <View style={styles.secondProduct}>
                        <Image
                            style={styles.componentImage2}
                            source={require('../assets/CompareInterface-icon/images_2.png')}>
                        </Image>
                        <TouchableOpacity style={styles.secondImageText}>
                            <Text style={styles.text}>Choose</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={styles.componentDetail}>
                <View style={styles.firstProductDetail}>
                    <Image
                        style={{ width: 50, height: 50, marginTop: 20, marginLeft: 50 }}
                        source={require('../assets/CompareInterface-icon/images_1.png')}>
                    </Image>
                    <Text style={styles.leftProductlText}>Sữa cô gái hà lan</Text>
                    <View style={styles.priceProductCompare}>
                        <PriceProductCompare />
                    </View>
                    <View style={styles.infoProduct}>
                        <InfoProduct />
                    </View>
                    <View style={styles.theOrigin}>
                        <TheOrigin />
                    </View>
                    <View style={styles.theOrigin}>
                        <SimilarStore />
                    </View>
                </View>
                {/* <View style={{ borderBottomWidth: 1, borderColor: 'black'  }}></View> */}
                <View style={styles.secondProductDetail}>
                    <Image
                        style={{ width: 40, height: 50, marginTop: 20, marginHorizontal: 50 }}
                        source={require('../assets/CompareInterface-icon/images_2.png')}>
                    </Image>
                    <Text style={styles.rightProductText}>Sữa tươi Vinamilk</Text>
                    <View style={styles.priceProductCompare}>
                        <PriceProductCompare />
                    </View>
                    <View style={styles.infoProduct}>
                        <InfoProduct />
                    </View>

                    <View style={styles.theOrigin}>
                        <TheOrigin />
                    </View>
                    <View style={styles.theOrigin}>
                        <SimilarStore />
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#333'
    },
    componentCompare: {
        backgroundColor: 'white',
        marginHorizontal: 20,
        marginTop: 20,
        height: 280,
        borderRadius: 15,
    },
    componentText: {
        backgroundColor: '#B2CA1F',
        justifyContent: 'center',
        width: 75,
        height: 30,
        borderRadius: 10,
        marginHorizontal: 20,
    },
    imageCompare: {
        display: 'flex',
        flexDirection: 'row',
    },
    firstProductDetail: {
        borderRightWidth: 1,
        borderColor: '#BA8F8F'
    },
    firstProduct: {
        marginHorizontal: 5,
    },
    text: {
        textAlign: 'center',
        fontWeight: 'bold',
    },
    iconCompare: {
        marginVertical: 30,
        right: 10,
    },
    secondProduct: {
        marginHorizontal: 10,
        marginVertical: 25
    },
    secondImageText: {
        backgroundColor: '#B2CA1F',
        justifyContent: 'center',
        width: 75,
        height: 30,
        borderRadius: 10,
        marginVertical: 15,
    },
    componentDetail: {
        backgroundColor: 'white',
        marginHorizontal: 20,
        marginVertical: 20,
        borderRadius: 15,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center'
    },
    leftProduct: {
        // width: 30
    },
    originText: {
        marginVertical: 10,
        marginHorizontal: 15,
    },
    leftProductlText: {
        marginVertical: 10,
        marginHorizontal: 20,
    },
    rightProductText: {
        marginVertical: 10,
        marginHorizontal: 20
    },
    // leftProductPrice: {
    //     marginHorizontal: 20,
    // },

})

export default CompareInterface;