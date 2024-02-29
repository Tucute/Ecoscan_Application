import { Image, View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const SimilarStore = () => {
    return (
        <View style={styles.container}>
            <View style={styles.separator} />
            <TouchableOpacity>
              <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 10,  marginVertical: 5 }}>
                <Text style={{  marginRight: 10 }}>•</Text>
                <Text style={{ color: 'blue' }}>Vinmart</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 10, marginVertical: 5  }}>
                <Text style={{ marginRight: 10 }}>•</Text>
                <Text style={{ color: 'blue' }}>Family</Text>
              </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 0
      },
      separator: {
        borderBottomColor: '#BA8F8F',
        borderBottomWidth: 1,
        width: '100%',
      },
      textContainer: {
        marginVertical: 10,
      },
      boldText: {
        fontWeight: 'bold',
      }
});

export default SimilarStore