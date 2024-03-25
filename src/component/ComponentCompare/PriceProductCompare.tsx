import { Image, View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
interface Price {
    price: number;
}
const PriceProductCompare = ({price}: Price) => {
    return (
        <View>
            <View
                style={{
                    borderBottomColor: '#BA8F8F',
                    borderBottomWidth: 1,
                    width: '100%',
                }}
            />
            <View style={styles.priceItem}>
                <Text style={styles.leftProductPrice}>Giá: 
                    <Text style={{color: '#000'}}>{' '} {price} VND</Text>
                </Text>
            </View>
            <View
                style={{
                    borderBottomColor: '#BA8F8F',
                    borderBottomWidth: 1,
                    width: '100%',   
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    leftProductPrice: {
        marginHorizontal: 20,
        marginVertical: 5,
        color: '#000',
    },
});

export default PriceProductCompare;