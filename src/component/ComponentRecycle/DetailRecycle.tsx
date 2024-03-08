import { View, Image, Text, StyleSheet, Dimensions, ScrollView } from "react-native";

const { width, height } = Dimensions.get('screen');

const DetailRecycle = () => {
    return (
        <ScrollView style={style.container}>
            <View style={style.title}>
                <Text style={[style.titleText, { flexWrap: 'wrap' }]}>
                    Chúng ta uống sữa mỗi ngày và thải ra môi trường vô số hộp sữa rỗng gọi là "rác chết".
                    Vậy sao không thử tái chế vỏ hộp sữa thành những món đồ trang trí dễ thương, xinh xắn
                </Text>
            </View>
            <View style={style.toolsnecessary}>
                <Text style={[style.recycleText, { flexWrap: 'wrap' }]}>
                    Bạn sẽ cần: {'\n'}
                    <View>
                        <Text style={{ marginVertical: 5, color: '#FFFFFF' }}>• Vỏ hộp sữa tươi</Text>
                        <Text style={{ marginBottom: 5, color: '#FFFFFF' }}>• Vỏ hộp sữa tươi</Text>
                        <Text style={{ marginBottom: 5, color: '#FFFFFF' }}>• Vỏ hộp sữa tươi</Text>
                    </View>
                </Text>
            </View>
            <View style={style.making}>
                <Text style={[style.instruction, { flexWrap: 'wrap' }]}>
                    Cách làm: {'\n'}
                    <View>
                        <Text style={{ marginVertical: 5, color: '#FFFFFF' }}>Step 1:
                            <Text> Bạn chỉ cần rửa sạch lon sửa và để khô ráo</Text>
                        </Text>
                        <Text style={{ marginBottom: 5, color: '#FFFFFF' }}>Step 2:
                            <Text> Sau đó dùng sơn để phủ một lớp áo mới cho vỏ {'\n'}hộp thêm đẹp mắt hơn. </Text>
                        </Text>
                        <Text style={{ marginBottom: 5, color: '#FFFFFF' }}>Step 3:
                            <Text> Cuối cùng là dùng cây sắt để đục lỗ thoát nước {'\n'}phía dưới đáy hộp rồi cho đất và hạt giống vào gieo.</Text>
                        </Text>
                    </View>
                </Text>
            </View>
            <View style={style.summary}>
                <Text style={{ color: '#FFFFFF' }}>
                    Chỉ cần vài động tác đơn giản là bạn đã có những chậu cây bé xíu trong nhà rồi, hãy đợi đến ngày thu được thành quả nhé.
                </Text>
            </View>
        </ScrollView>
    );
};


const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#333333'
    },
    title: {
        marginHorizontal: 20,
        marginVertical: 20,
    },
    titleText: {
        color: '#FFFFFF',
        flexWrap: 'wrap',
    },
    toolsnecessary: {
        marginHorizontal: 20,
    },
    recycleText: {
        color: '#FFFFFF',
    },
    instruction: {
        color: '#FFFFFF',
        display: 'flex',
    },
    making: {
        marginHorizontal: 20,
        marginVertical: 5,
    },
    summary: {
        marginHorizontal: 20,
        marginVertical: 5,
    }
})

export default DetailRecycle;