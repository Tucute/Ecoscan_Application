import React from 'react';
import { Image, View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';


const TheOrigin = ({manufacturer}: any) => {
    return (
        <View style={styles.container}>
            <View
                style={{
                    borderBottomColor: '#BA8F8F',
                    borderBottomWidth: 1,
                    width: '100%',   
                }}
            />
            <Text style={styles.ingredient}>
                <Text style={{ fontWeight: 'bold', color: '#000' }}>Nhà sản xuất:
                    <Text style={{fontWeight: '400'}}>{'\n'}{manufacturer}</Text>
                </Text>
                <View style={styles.separator} />
            </Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    ingredient: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginVertical: 10,
        marginHorizontal: 10,
    },
    separator: {
        borderBottomColor: '#BA8F8F',
        borderBottomWidth: 1,
        width: '100%',
      },
});

export default TheOrigin