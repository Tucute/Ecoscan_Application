import React, { useRef } from 'react';
import { Dimensions, Image, StyleSheet, View } from 'react-native';
import Carousel from 'react-native-snap-carousel';
interface ItemImage {
    id: string;
    url: string;
  }
  interface Image {
    itemImage: ItemImage[]; 
  }
  const {width} = Dimensions.get('window');

const ItemDetail = ({itemImage}:Image) => {
  const carouselRef = useRef<Carousel<ItemImage>>(null);

    return (
        <Carousel
        data={itemImage}
        renderItem={({item}) => (
          <View style={styles.viewImage}>
            <Image
              source={{uri: item.url}}
              style={styles.imgProduct}
              resizeMode="cover"></Image>
          </View>
        )}
        ref={carouselRef}
        sliderWidth={width}
        itemWidth={width - 20}
        enableSnap
      />
    );
};
const styles = StyleSheet.create({
    viewImage: {
        width: '94%',
        height: 300,
        borderRadius: 15,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
      },
      imgProduct: {
        borderRadius: 15,
        width: '100%',
        height: '100%',
        objectFit: 'contain',
        backgroundColor: '#fff',
      },
})

export default ItemDetail;