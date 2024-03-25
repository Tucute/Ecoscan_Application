import { Image, View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

interface Ingredient {
    ingredient: string;
}

const InfoProduct = ({ingredient}: Ingredient) => {
    return (
        <View style={styles.container}>
            <Text style={styles.ingredient}>
                {ingredient}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    ingredient: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginVertical: 5,
        marginHorizontal: 10,
        color: '#000',
    },
});

export default InfoProduct