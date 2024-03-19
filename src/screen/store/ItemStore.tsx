import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import useGetProductShop from '../../hook/useGetProductShop';
import ItemProduct from '../../component/itemProduct';
interface DataShop {
  _id: string;
  shopName?: string;
  address?: string | undefined;
  latitude: number;
  longitude: number;
}
interface Shop {
  data: DataShop;
}
const ItemStore = ({data}: Shop) => {
  const {data: productShop, isError, isLoading} = useGetProductShop(data._id);
  if (isError) {
    <View style={styles.container}>
      <Text>Have any error! Try again</Text>
    </View>;
  }
  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#00ff00" />
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={styles.listItems}
        data={productShop}
        keyExtractor={item => item._id}
        renderItem={({item}) => <ItemProduct key={item._id} dataProductShop={item} />}
      />
    </View>
  );
};
export default ItemStore;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 10,
    marginHorizontal: 10,
  },
  listItems: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  displayCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    height: 110,
    borderRadius: 15,
  },
  listItemDetail: {
    width: '80%',
  },
  detailItems: {
    backgroundColor: '#FFFFFF',
    width: 260,
    paddingLeft: 20,
  },
  image: {
    width: 60,
    height: 79,
    borderRadius: 10,
  },
  time: {
    color: '#216C53',
    fontSize: 12,
    fontWeight: 'bold',
  },
  hour: {
    color: '#6C6C6C',
    fontSize: 12,
    fontWeight: 'bold',
  },
  detail: {
    color: '#120D26',
    fontSize: 15.5,
    fontWeight: 'bold',
    width: '90%',
  },
  address: {
    fontSize: 13,
    marginLeft: 4,
    fontWeight: 'bold',
    color: '#747688',
  },
  editGroup: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    alignSelf: 'flex-end',
    paddingVertical: 5,
  },
  times_group: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
  },
  section: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    paddingHorizontal: 20,
  },
  seeAll: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
  },
  sectionName: {
    fontSize: 18,
    fontWeight: '500',
    color: '#120D26',
  },
});
