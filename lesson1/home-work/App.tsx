import {StatusBar} from 'expo-status-bar';
import React, {useState} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    TextInput,
    TouchableOpacity,
    Pressable,
    ListRenderItem,
    FlatList,
    ScrollView
} from 'react-native';

const {width} = Dimensions.get('screen')

const WIDTH = width

const brands = new Array(4).fill(null).map((el, index) => ({
    id: index + 1,
    imgUrl: `./assets/brands/${index + 1}.jpg`
}))

type BrandsType = {
    id: number
    imgUrl: string
}

export default function App() {

    const [text, setText] = useState<string>('')

    const renderItemHandler: ListRenderItem<BrandsType> = ({item}) => {
        return <View style={{
            borderWidth: 1,
            borderRadius: 5,
            margin: 5
        }}>
            <Image
                style={{
                    width: (WIDTH - 17.5 * 2) / 2 - 5,
                    height: 35,
                    paddingVertical: 30
                }}
                source={require(`./assets/brands/1.jpg`)}
            />
        </View>
    }

    return (
        <View style={styles.container}>
            <ScrollView style={styles.scroll}>
                <View style={styles.headerImg}>
                    <Pressable onPress={() => alert('Menu: Page is in development')}>
                        <Image source={require('./assets/menu.png')}/>
                    </Pressable>
                    <Image source={require('./assets/logo.jpg')}/>
                    <Pressable onPress={() => alert('User: Page is in development')}>
                        <Image source={require('./assets/user.png')}/>
                    </Pressable>
                </View>
                <View style={styles.searchBox}>
                    <TextInput
                        style={styles.inputSearch}
                        onChangeText={setText}
                        value={text}
                        placeholder={'Search'}
                    />
                    <TouchableOpacity
                        style={styles.buttonSearch}
                        onPress={() => alert('Search: Page is in development')}
                    >
                        <Text style={styles.buttonSearchText}>&#128269;</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <View style={styles.titleLogo}>
                        <Text style={styles.titleTextLogo}>Custom Wide Body Kits</Text>
                    </View>
                    <Image
                        style={styles.imgLogo}
                        source={require('./assets/slide1.jpg')}
                    />
                </View>
                <View style={styles.brandsBox}>
                    <Text style={styles.brandsTitle}>WE CARRY TOP BRANDS</Text>
                    <View style={styles.lineTitle}></View>


                </View>
                <View style={styles.brandsFlatList}>
                    <FlatList
                        data={brands}
                        renderItem={renderItemHandler}
                        numColumns={2}
                    />
                </View>
                <View>
                    <Image
                        style={styles.imgSpeakers}
                        source={require('./assets/speakers.jpg')}
                    />
                    <Text></Text>
                </View>
                <View>
                    <Image
                        style={styles.imgSpeakers}
                        source={require('./assets/speakers.jpg')}
                    />
                </View>
            </ScrollView>
            <StatusBar style="auto"/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    scroll: {
        // position: 'absolute',
        // left: 12
    },
    headerImg: {
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 55,
        width: WIDTH - 30,
        marginTop: 30,
        marginBottom: 15,
    },
    searchBox: {
        flexDirection: "row",
        justifyContent: 'center',
        width: WIDTH - 30,
        height: 42,
    },
    inputSearch: {
        height: 42,
        width: WIDTH - 72,
        borderWidth: 1,
        padding: 10,
    },
    buttonSearch: {
        width: 42,
        height: 42,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderLeftWidth: 0
    },
    buttonSearchText: {
        fontSize: 25,
        textAlign: 'center'
    },
    titleLogo: {
        alignItems: 'center',
        position: "absolute",
        zIndex: 2,
        width: WIDTH - 30,
        top: 60,
        left: 0
    },
    titleTextLogo: {
        color: '#fff',
        fontSize: 18,
        fontWeight: "700",
    },
    imgLogo: {
        width: WIDTH - 30,
        height: 120,
        marginVertical: 20,
    },
    brandsBox: {
        width: WIDTH - 30,
    },
    brandsTitle: {
        fontSize: 22,
        fontWeight: '500',
    },
    lineTitle: {
        backgroundColor: 'red',
        width: 50,
        height: 3,
        marginTop: 10,
        marginBottom: 15
    },
    brandsFlatList: {
        justifyContent: 'center',
        width: WIDTH - 20,
    },
    imgSpeakers: {
        width: WIDTH - 20,
        borderRadius: 5,
        marginTop: 20,
    }
});
