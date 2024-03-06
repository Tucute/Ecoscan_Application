import { Image, View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

interface Ingredient {
    ingredient: string;
}

const InfoProduct = ({ingredient}: Ingredient) => {
    return (
        <View style={styles.container}>
            <Text style={styles.ingredient}>
                {/* <Text style={{ fontWeight: 'bold' }}>Thành Phần:</Text> sữa tươi{'\n'}
                <Text style={{ fontWeight: 'bold' }}>Nguyên chất:</Text> 95,9% {'\n'}
                <Text style={{ fontWeight: 'bold' }}>Đường tinh luyện:</Text> 3,8% {'\n'}
                <Text style={{ fontWeight: 'bold' }}>Chất ổn định</Text> (471, {'\n'}460(i), 407, 466) {'\n'}
                <Text style={{ fontWeight: 'bold' }}>Vitamin</Text> (natri ascorbat, {'\n'}A, D3) {'\n'}
                <Text style={{ fontWeight: 'bold' }}>Khoáng chất</Text> (natri {'\n'}selenit) {'\n'} */}
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
    },
});

export default InfoProduct