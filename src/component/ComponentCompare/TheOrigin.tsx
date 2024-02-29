import { Image, View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';


const TheOrigin = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.ingredient}>
                <Text style={{ fontWeight: 'bold' }}>Nguồn gốc xuất xứ:</Text> {'\n'}Hà Lan {'\n'}
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