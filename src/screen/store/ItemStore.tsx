import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';


export default function Map() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.listItems}>
        <View style={styles.section}>
          <Text style={styles.sectionName}>Pending</Text>
          <TouchableOpacity style={styles.seeAll}>
            <Text
              onPress={() => navigation.navigate('SeeAllLive')}
            >See All</Text>
            <Image source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6VTfyJC1TR_CSoCs22ivd2eT5ZI3U7Qt8tw&usqp=CAU'}} />
          </TouchableOpacity>
        </View>
        <View style={styles.listItems}>
          <View style={styles.item}>
            <Image
              style={styles.image}
              source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6VTfyJC1TR_CSoCs22ivd2eT5ZI3U7Qt8tw&usqp=CAU'}}
            />
            <View style={styles.detailItems}>
              <Text style={styles.time}>Wed, Apr 10 •8:30AM - 17:30 PM</Text>
              <View style={styles.times_group}>
                <View style={styles.listItemDetail}>
                  <Text style={styles.detail}>Challenge: Clear the city</Text>
                  <View style={styles.times_group}>
                    <Image source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6VTfyJC1TR_CSoCs22ivd2eT5ZI3U7Qt8tw&usqp=CAU'}} />
                    <Text style={{
                      fontSize: 12,
                      color: "#363636"
                    }}>Phuoc My • Son Tra • Da Nang</Text>
                  </View>
                </View>
                <View style={styles.displayCenter}>
                  <Image source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6VTfyJC1TR_CSoCs22ivd2eT5ZI3U7Qt8tw&usqp=CAU'}} style={styles.editGroup} />
                </View>
              </View>

              <Text style={styles.hour}>1m ago.</Text>
            </View>
          </View>
          <View style={styles.item}>
            <Image
              style={styles.image}
              source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6VTfyJC1TR_CSoCs22ivd2eT5ZI3U7Qt8tw&usqp=CAU'}}
            />
            <View style={styles.detailItems}>
              <Text style={styles.time}>Wed, Apr 28 •8:30AM - 17:30 PM</Text>
              <View style={styles.times_group}>
                <View style={styles.listItemDetail}>
                  <Text style={styles.detail}>Challenge: Clean the beach</Text>
                  <View style={styles.times_group}>
                    <Image source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6VTfyJC1TR_CSoCs22ivd2eT5ZI3U7Qt8tw&usqp=CAU'}} />
                    <Text style={{
                      fontSize: 12,
                      color: "#363636"
                    }}>Phuoc My • Son Tra • Da Nang</Text>
                  </View>
                </View>
                <View style={styles.displayCenter}>
                  <Image source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6VTfyJC1TR_CSoCs22ivd2eT5ZI3U7Qt8tw&usqp=CAU'}} style={styles.editGroup} />
                </View>
              </View>

              <Text style={styles.hour}>1m ago.</Text>
            </View>
          </View>
          <View style={styles.item}>
            <Image
              style={styles.image}
              // source={{uri:'../../assets/images/Green.png'}}
            />
            <View style={styles.detailItems}>
              <Text style={styles.time}>Wed, Apr 30 •8:30AM - 17:30 PM</Text>
              <View style={styles.times_group}>
                <View style={styles.listItemDetail}>
                  <Text style={styles.detail}>Challenge: Clear the city</Text>
                  <View style={styles.times_group}>
                    {/* <Image  source={{uri:'../../assets/icons/locationdetail.png'}} /> */}
                    <Text style={{
                      fontSize: 12,
                      color: "#363636"
                    }}>Phuoc My • Son Tra • Da Nang</Text>
                  </View>
                </View>
                <View style={styles.displayCenter}>
                  {/* <Image  source={{uri:'../../assets/icons/Shape.png'}} style={styles.editGroup} /> */}
                </View>
              </View>

              <Text style={styles.hour}>1m ago.</Text>
            </View>
          </View>
          <View style={styles.section}>
            <Text style={styles.sectionName}>Approve</Text>
            <TouchableOpacity style={styles.seeAll}>
              <Text
                onPress={() => navigation.navigate('SeeAllLive')}
              >See All</Text>
              {/* <Image  source={{uri:'../../assets/icons/iconSeeAll.png'}} /> */}
            </TouchableOpacity>
          </View>
          <View style={styles.item}>
            <Image
              style={styles.image}
              //  source={{uri:'../../assets/images/Green.png'}}
            />
            <View style={styles.detailItems}>
              <Text style={styles.time}>Wed, Apr 15 •8:30AM - 17:30 PM</Text>
              <View style={styles.times_group}>
                <Text style={{ fontSize: 14, marginLeft: 5, color: "#363636" }}>
                  <Text style={styles.detail}>Challenge:Protect the green fores...</Text>
                </Text>
              </View>
              <View style={styles.times_group}>
                    {/* <Image  source={{uri:'../../assets/icons/locationdetail.png'}} /> */}
                    <Text style={{
                      fontSize: 12,
                      color: "#363636"
                    }}>Vo Nguyen Giap • Son Tra • Da Nang</Text>
                  </View>
              <Text style={styles.hour}>1m ago.</Text>
            </View>
          </View>
          <View style={styles.item}>
            <Image
              style={styles.image}
              //  source={{uri:'../../assets/images/Green.png'}}
            />
            <View style={styles.detailItems}>
              <Text style={styles.time}>Wed, Apr 01 •9:30AM - 17:30 PM</Text>
              <View style={styles.times_group}>
                <Text style={{ fontSize: 14, marginLeft: 5, color: "#363636" }}>
                  <Text style={styles.detail}>Challenge:Protect the green fores...</Text>
                </Text>
              </View>
              <View style={styles.times_group}>
                    {/* <Image  source={{uri:'../../assets/icons/locationdetail.png'}} /> */}
                    <Text style={{
                      fontSize: 12,
                      color: "#363636"
                    }}>Vo Nguyen Giap • Son Tra • Da Nang</Text>
                  </View>
              <Text style={styles.hour}>1m ago.</Text>
            </View>
          </View>
          
          <View style={styles.section}>
            <Text style={styles.sectionName}>Reject</Text>
            <TouchableOpacity style={styles.seeAll}>
              <Text
                onPress={() => navigation.navigate('SeeAllLive')}
              >See All</Text>
              {/* <Image  source={{uri:'../../assets/icons/iconSeeAll.png'}} /> */}
            </TouchableOpacity>
          </View>
          <View style={styles.item}>
            <Image
              style={styles.image}
              //  source={{uri:'../../assets/profile/Sa.jpg'}}
            />
            <View style={styles.detailItems}>
              <Text style={styles.time}>Wed, Apr 30 •8:30AM - 17:30 PM</Text>
              <View style={styles.times_group}>
                <Text style={{ fontSize: 14, marginLeft: 5, color: "#363636" }}>
                  <Text style={styles.detail}>Challenge: Racing event</Text>
                </Text>
              </View>
              <View style={styles.times_group}>
                    {/* <Image source={{uri:'../../assets/icons/locationdetail.png'}} /> */}
                    <Text style={{
                      fontSize: 12,
                      color: "#363636"
                    }}>Vo Van Kiet • Son Tra • Da Nang</Text>
                  </View>
              <Text style={styles.hour}>2m ago.</Text>
            </View>
          </View>
          <View style={styles.item}>
            <Image
              style={styles.image}
               source={{uri:'../../assets/profile/Sa.jpg'}}
            />
            <View style={styles.detailItems}>
              <Text style={styles.time}>Wed, Apr 30 •8:30AM - 17:30 PM</Text>
              <View style={styles.times_group}>
                <Text style={{ fontSize: 14, marginLeft: 5, color: "#363636" }}>
                  <Text style={styles.detail}>Challenge: Racing event</Text>
                </Text>
              </View>
              <View style={styles.times_group}>
                    {/* <Image source={{uri:'../../assets/icons/locationdetail.png'}} /> */}
                    <Text style={{
                      fontSize: 12,
                      color: "#363636"
                    }}>Vo Van Kiet • Son Tra • Da Nang</Text>
                  </View>
              <Text style={styles.hour}>3m ago.</Text>
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
    gap: 12,
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
