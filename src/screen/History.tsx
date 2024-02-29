import React from 'react';
import {
  ActivityIndicator,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const History = () => {
  return (
    <ImageBackground
      style={styles.container}
      source={require('../assets/image/Background_History.jpg')}>
      <View style={styles.viewTitle}>
        <Text style={styles.title}>History</Text>
      </View>
        <View style={styles.viewListHistory}>
          <View style={styles.viewItem}>
            <Image
              style={styles.iconQrCode}
              source={require('../assets/iconScanScreen/generate-focused.png')}
            />
            <View style={styles.viewInfo}>
              <Text style={styles.name}>Sữa Vinamilk</Text>
              <Text style={styles.barCode}>8935005801029</Text>
            </View>
            <View style={styles.viewTime}>
              <TouchableOpacity style={styles.btnDelete}>
                <Image
                  source={require('../assets/iconGeneral/IconDelete.png')}
                />
              </TouchableOpacity>
              <Text style={styles.time}>16 Dec 2024, 9:30 pm</Text>
            </View>
          </View>
          <View style={styles.viewItem}>
            <Image
              style={styles.iconQrCode}
              source={require('../assets/iconScanScreen/generate-focused.png')}
            />
            <View style={styles.viewInfo}>
              <Text style={styles.name}>Sữa Vinamilk</Text>
              <Text style={styles.barCode}>8935005801029</Text>
            </View>
            <View style={styles.viewTime}>
              <TouchableOpacity style={styles.btnDelete}>
                <Image
                  source={require('../assets/iconGeneral/IconDelete.png')}
                />
              </TouchableOpacity>
              <Text style={styles.time}>16 Dec 2024, 9:30 pm</Text>
            </View>
          </View>
          <View style={styles.viewItem}>
            <Image
              style={styles.iconQrCode}
              source={require('../assets/iconScanScreen/generate-focused.png')}
            />
            <View style={styles.viewInfo}>
              <Text style={styles.name}>Sữa Vinamilk</Text>
              <Text style={styles.barCode}>8935005801029</Text>
            </View>
            <View style={styles.viewTime}>
              <TouchableOpacity style={styles.btnDelete}>
                <Image
                  source={require('../assets/iconGeneral/IconDelete.png')}
                />
              </TouchableOpacity>
              <Text style={styles.time}>16 Dec 2024, 9:30 pm</Text>
            </View>
          </View>
          <View style={styles.viewItem}>
            <Image
              style={styles.iconQrCode}
              source={require('../assets/iconScanScreen/generate-focused.png')}
            />
            <View style={styles.viewInfo}>
              <Text style={styles.name}>Sữa Vinamilk</Text>
              <Text style={styles.barCode}>8935005801029</Text>
            </View>
            <View style={styles.viewTime}>
              <TouchableOpacity style={styles.btnDelete}>
                <Image
                  source={require('../assets/iconGeneral/IconDelete.png')}
                />
              </TouchableOpacity>
              <Text style={styles.time}>16 Dec 2024, 9:30 pm</Text>
            </View>
          </View>
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
    marginHorizontal: 20,
  },
  viewItem: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#333333',
    borderRadius: 10,
    marginBottom: 15,
  },
  iconQrCode: {
    width: 30,
    height: 30,
  },
  viewInfo: {
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  name: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  barCode: {
    color: '#A4A4A4',
    fontSize: 11,
  },
  viewTime: {
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  btnDelete: {
    padding: 2,
    marginBottom: 5,
  },
  time: {
    color: '#A4A4A4',
    fontSize: 12,
  },
});
export default History;
