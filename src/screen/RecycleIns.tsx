import { FlatList, View, StyleSheet, TouchableOpacity, Image, Dimensions, Text } from "react-native";
import DetailRecycle from "../component/ComponentRecycle/DetailRecycle";
import data from '../data/DataProduct'
import ComponentImage from "../component/ComponentRecycle/ComponentImage";
import Carousel from "react-native-snap-carousel";

const { width, height } = Dimensions.get('screen');

const RecyclingIns = () => {
    
    return (
        <View style={style.container}>
            <View style={style.componentRecycle}>
                <TouchableOpacity style={style.iconBack}>
                    <Image
                        style={style.image}
                        source={require('../assets/CompareInterface-icon/Iconback.png')}>
                    </Image>
                </TouchableOpacity>
                <View style={style.viewImage}>
                    <Carousel
                    data={data}
                    renderItem={item => <ComponentImage item ={item}/>}
                    sliderWidth={Dimensions.get("screen").width}
                    itemWidth={300}
                    />
                </View>
            </View>
            <DetailRecycle />
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        width,
        height,
    },
    componentRecycle: {
        flex: 1.5,
        backgroundColor: '#fff',
    },
    iconBack: {
        marginHorizontal: 20,
        // position: 'absolute',
        marginTop: 20,
        borderRadius: 15,
    },
    viewImage: {
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
    }
})

export default RecyclingIns;