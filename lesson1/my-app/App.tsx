import {StatusBar} from 'expo-status-bar';
import React, {useEffect} from 'react';
import {useState} from 'react';
import {
  ActivityIndicator,
  Alert,
  Button,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  FlatList, ListRenderItem, Dimensions
} from 'react-native';

const {width} = Dimensions.get('screen')

const WIDTH = width
const NUM_COL = 2

const arrPhoneName = ['Huawei', 'Nokia', 'Samsung', 'IPhone', 'LG']
const arrPrice = [200, 500, 1000, 1000, 400]

const arrData = new Array(50).fill(null).map((_, index) => ({
  id: index + 1,
  phoneName: arrPhoneName[index % arrPhoneName.length],
  price: arrPrice[index % arrPrice.length]
}))

type DataType = {
  id: number
  phoneName: string
  price: number
}

export default function App() {

  const [text, onChangeText] = useState("");
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    setTimeout(() => {setRefreshing(false)}, 2000)
  }, [refreshing])

  const renderHandler: ListRenderItem<DataType> = ({item}) => {
    return <View style={styles.item}>
      <Text numberOfLines={1}>{item.phoneName}</Text>
      <Text>{item.price}</Text>
    </View>
  }

  return (
      <View style={styles.container}>

        <FlatList
            data={arrData}
            renderItem={renderHandler}
            numColumns={NUM_COL}
            columnWrapperStyle={{justifyContent: 'space-between'}}
            ListEmptyComponent={() => <View><Text>Текст если нечего нету</Text></View> }
            ListHeaderComponent={() => <View><Text>Текст Header</Text></View>}
            stickyHeaderIndices={[0]}
            refreshing={refreshing}
            onRefresh={() => {
              setRefreshing(true)
            }}
            // keyExtractor={item => item.id}
        />
        {/*<Text>Open up App.tsx to start working on your app!</Text>*/}
        {/*<ActivityIndicator/>*/}
        {/*<Button*/}
        {/*    title="Press me"*/}
        {/*    onPress={() => Alert.alert('Simple Button pressed')}*/}
        {/*/>*/}
        {/*<Image*/}
        {/*    style={{*/}
        {/*        height: 50,*/}
        {/*        width: 50*/}
        {/*    }}*/}
        {/*    source={{*/}
        {/*        uri: 'https://reactnative.dev/img/tiny_logo.png',*/}
        {/*    }}*/}
        {/*/>*/}
        {/*<TouchableOpacity*/}
        {/*    // style={styles.button}*/}
        {/*    onPress={() => {*/}
        {/*    }}*/}
        {/*>*/}
        {/*    <Text>Press Here</Text>*/}
        {/*</TouchableOpacity>*/}
        {/*<TextInput*/}
        {/*    style={{*/}
        {/*        height: 40,*/}
        {/*        width: 200,*/}
        {/*        borderWidth: 1,*/}
        {/*    }}*/}
        {/*    onChangeText={onChangeText}*/}
        {/*    value={text}*/}
        {/*/>*/}
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 35,
    paddingHorizontal: 20,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  item: {
    marginVertical: 5,
    width: (WIDTH - 20 * 2) / NUM_COL - 5,
    height: (WIDTH - 20 * 2) / NUM_COL - 5,
    backgroundColor: 'tomato',
    borderWidth: 1,
    padding: 10,
    borderRadius: 5
  }
});
