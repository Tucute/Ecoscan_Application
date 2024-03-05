import { Text, View, StyleSheet, TouchableOpacity, Image, Dimensions } from "react-native";
import React from "react";
import data from '../../data/DataProduct';

const { width, height } = Dimensions.get('screen');

const ComponentImage = ({item}) => {  
    return (
        <View style={{
            borderWidth: 1,
            padding: 20,
            borderRadius: 20,
            alignItems: 'center',
            backgroundColor: 'white',
        }}>
            <Image
                style={style.imageRecycle}
                resizeMode="cover"
                source={{ uri: item.item.image}}>
            </Image>
        </View>
    )
}

const style = StyleSheet.create({
    imageRecycle: {
        objectFit: 'cover',
        width: "100%",
        height: 180,
    },
});

export default ComponentImage;