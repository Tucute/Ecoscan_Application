import {
  View,
  Image,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
} from 'react-native';

const {width, height} = Dimensions.get('screen');

const DetailRecycle = () => {
  return (
    <ScrollView style={style.container}>
      <View style={style.title}>
        <Text style={[style.titleText, {flexWrap: 'wrap'}]}>
          Chai nhựa là một vật dụng chiếm phần lớn rác thải nhựa nhưng cũng là
          một chất liệu khá hữu ích trong đời sống. Để góp phần bảo vệ môi
          trường và sức khỏe, bạn có thể áp dụng 14 cách làm sản phẩm tái chế từ
          chai nhựa sau đây.
        </Text>
      </View>
      <View style={style.toolsnecessary}>
        <Text style={[style.recycleText, {flexWrap: 'wrap', fontWeight: 'bold'}]}>
          Bạn sẽ cần: {'\n'}
          <View>
            <Text style={{marginVertical: 5, color: '#FFFFFF'}}>
              • Chai nhựa
            </Text>
            <Text style={{marginBottom: 5, color: '#FFFFFF'}}>• Màu sơn</Text>
            <Text style={{marginBottom: 5, color: '#FFFFFF'}}>
              • Hạt giống
            </Text>
          </View>
        </Text>
      </View>
      <View style={style.making}>
        <Text style={[style.instruction, {flexWrap: 'wrap', fontWeight: 'bold'}]}>
          Cách làm: {'\n'}
          <View style={style.stepsRecycle}>
            <Text style={{marginVertical: 5, color: '#FFFFFF'}}>
              Step 1:
              <Text> Dùng dao rọc giấy cắt chai nhựa 1,5l làm đôi. </Text>
            </Text>
            <Text style={{marginBottom: 5, color: '#FFFFFF'}}>
              Step 2:
              <Text style={[style.recycleText, {flexWrap: 'wrap'}]}>
                {' '}
                Dùng bút vẽ phác họa hình mèo hoặc thỏ rồi {'\n'}sau đó bạn cắt theo đường vẽ..{' '}
              </Text>
            </Text>
            <Text style={{marginBottom: 5, color: '#FFFFFF'}}>
              Step 3:
              <Text>
                {' '}
                Sơn màu trắng cho chai nhựa rồi dùng bút khắc {'\n'}gỗ để trang trí hình mèo theo ý thích.
              </Text>
            </Text>
          </View>
        </Text>
      </View>
      <View style={style.summary}>
        <Text style={{color: '#FFFFFF'}}>
          Chỉ cần vài động tác đơn giản là bạn đã có những chậu cây bé xíu trong
          nhà rồi, hãy đợi đến ngày thu được thành quả nhé.
        </Text>
      </View>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 5,
    backgroundColor: '#333333',
  },
  title: {
    marginHorizontal: 20,
    marginVertical: 15,
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
    marginVertical: 10
  },
  making: {
    marginHorizontal: 20,
    marginVertical: 5,
  },
  summary: {
    marginHorizontal: 20,
  },
  firstStep: {
    flexWrap: 'wrap'
  }
});

export default DetailRecycle;
