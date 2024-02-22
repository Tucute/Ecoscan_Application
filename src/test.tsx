import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Test = () => {
    return (
        <View style={styles.container}>
            <View style={styles.viewChoose}>
            <Text>Choose File</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    viewChoose: {
        width: 350,
        height: 200,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#000',
        borderWidth: 2,
        borderStyle: 'dotted',
    },
})
export default Test;