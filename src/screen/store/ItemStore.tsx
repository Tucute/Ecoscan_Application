import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';


export default function Map() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.listItems}>
        <View style={styles.section}>
          <Text style={styles.sectionName}>Product</Text>
        </View>
        <View style={styles.listItems}>
          <View style={styles.item}>
            <Image
              style={styles.image}
              source={{uri: 'https://res.cloudinary.com/djveiec3v/image/upload/v1708920769/Ecoscan/nuoc-suoi-aquafina-chai-500ml-3_mqrrz6.jpg'}}
            />
            <View style={styles.detailItems}>
              <View style={styles.times_group}>
                <View style={styles.listItemDetail}>
                  <Text style={styles.detail}>Aquafina</Text>
                  <View style={styles.times_group}>
                    <Text style={{
                      fontSize: 12,
                      color: "#363636"
                    }}>Thùng nước Aquafina 335ml</Text>
                  </View>
                  <Text style={styles.hour}>109.000đ</Text>
                </View>
              </View>
            </View>
            <View style={{borderRightWidth: 1, borderColor: 'black'}} />
          </View>
          <View style={styles.item}>
            <Image
              style={styles.image}
              source={{uri: 'https://res.cloudinary.com/djveiec3v/image/upload/v1708920769/Ecoscan/nuoc-suoi-aquafina-chai-500ml-3_mqrrz6.jpg'}}
            />
            <View style={styles.detailItems}>
              <View style={styles.times_group}>
                <View style={styles.listItemDetail}>
                  <Text style={styles.detail}>Aquafina</Text>
                  <View style={styles.times_group}>
                    <Text style={{
                      fontSize: 12,
                      color: "#363636"
                    }}>Thùng nước Aquafina 335ml</Text>
                  </View>
                  <Text style={styles.hour}>109.000đ</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.item}>
            <Image
              style={styles.image}
              source={{uri: 'https://res.cloudinary.com/djveiec3v/image/upload/v1708920769/Ecoscan/nuoc-suoi-aquafina-chai-500ml-3_mqrrz6.jpg'}}
            />
            <View style={styles.detailItems}>
              <View style={styles.times_group}>
                <View style={styles.listItemDetail}>
                  <Text style={styles.detail}>Aquafina</Text>
                  <View style={styles.times_group}>
                    <Text style={{
                      fontSize: 12,
                      color: "#363636"
                    }}>Thùng nước Aquafina 335ml</Text>
                  </View>
                  <Text style={styles.hour}>109.000đ</Text>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.item}>
            <Image
              style={styles.image}
              source={{uri: 'https://res.cloudinary.com/djveiec3v/image/upload/v1708920769/Ecoscan/nuoc-suoi-aquafina-chai-500ml-3_mqrrz6.jpg'}}
            />
            <View style={styles.detailItems}>
              <View style={styles.times_group}>
                <View style={styles.listItemDetail}>
                  <Text style={styles.detail}>Aquafina</Text>
                  <View style={styles.times_group}>
                    <Text style={{
                      fontSize: 12,
                      color: "#363636"
                    }}>Thùng nước Aquafina 335ml</Text>
                  </View>
                  <Text style={styles.hour}>109.000đ</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.item}>
            <Image
              style={styles.image}
              source={{uri: 'https://res.cloudinary.com/djveiec3v/image/upload/v1708920769/Ecoscan/nuoc-suoi-aquafina-chai-500ml-3_mqrrz6.jpg'}}
            />
            <View style={styles.detailItems}>
              <View style={styles.times_group}>
                <View style={styles.listItemDetail}>
                  <Text style={styles.detail}>Aquafina</Text>
                  <View style={styles.times_group}>
                    <Text style={{
                      fontSize: 12,
                      color: "#363636"
                    }}>Thùng nước Aquafina 335ml</Text>
                  </View>
                  <Text style={styles.hour}>109.000đ</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 10,
  },
  listItems: {
    rowGap: 5,
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
    fontWeight: "bold",
    color: '#747688',
  },
  editGroup: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    alignSelf: 'flex-end',
    paddingVertical: 5
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
