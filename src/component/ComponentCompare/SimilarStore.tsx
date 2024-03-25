import {
  Image,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

interface ShopData {
  _id: string;
  shopName: string;
  phone: number;
  address: string;
  latitude: number;
  longitude: number;
  price: string;
}
interface Item {
  data: ShopData[];
  navigation: any;
}

const SimilarStore = ({navigation, data}: Item) => {
  return (
    <View style={styles.container}>
      <View style={styles.separator} />
      <Text style={styles.textSale}>On sales: </Text>
      {data?.map((item, index: number) => (
        <TouchableOpacity
          key={index.toString()}
          onPress={() => navigation.navigate('Store', {data: item})}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginHorizontal: 10,
              marginVertical: 5,
            }}>
            <Text style={{marginRight: 10}}>•</Text>
            <Text style={{color: 'blue', fontStyle: 'italic', textDecorationLine: 'underline',}}>{item.shopName}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0,
  },
  textSale: {
    paddingLeft: 10,
    fontWeight: 'bold',
    color: '#000',
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
  },
});

export default SimilarStore;
