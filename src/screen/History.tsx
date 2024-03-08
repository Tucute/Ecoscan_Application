import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import ItemHistory from '../component/ItemHistory';
import useGetHistory from '../hook/useGetHistory';
import useDeleteHistory from '../hook/useDeleteHistory';

interface History {
  historyId: string;
  userId: string;
  barcode_number: string;
  productData: {
    _id: string;
    barcode_number: number;
    price: number;
    subCategoryId: string;
    name: string;
    image: [
      {
        _id: string;
        url: string;
      },
    ];
  };
  create_at: string;
}

const History = ({navigation}: any) => {
  const {data, isLoading, isError} = useGetHistory();
  const [itemHistory, setItemHistory] = useState<History[]>(useGetHistory().data);
  const {handleDeleteHistory} = useDeleteHistory();
  
  const handleDelete = (historyId: String) => {
    const data = itemHistory.filter(item => {
      return item.historyId != historyId; 
    });
    setItemHistory(data);
    handleDeleteHistory(historyId);
  }

  useEffect(() => {
    if (data) {
      setItemHistory(data.data);
    }
  }, [data]);

  return (
    <ImageBackground
      style={styles.container}
      source={require('../assets/image/Background_History.jpg')}>
      <View style={styles.viewTitle}>
        <Text style={styles.title}>History</Text>
      </View>
      <View style={styles.viewListHistory}>
        {isLoading ? (
          <ActivityIndicator size="large" color="#00ff00" />
        ) : isError ? (
          <Text style={styles.textError}>Đã xảy ra lỗi! Vui lòng thử lại</Text>
        ) : (
          <FlatList
            data={itemHistory}
            keyExtractor={item => item.historyId}
            renderItem={({item}) => (
              <ItemHistory
                method={() =>handleDelete(item.historyId)}
                key={item.historyId}
                data={item}
                navigation={navigation}
              />
            )}
          />
        )}
      </View>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewTitle: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 40,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#fff',
  },
  viewListHistory: {
    flex: 6,
    // paddingHorizontal: 20,
  },
  textError: {
    color: '#fff',
    fontSize: 20,
    padding: 50,
  },
});
export default History;
