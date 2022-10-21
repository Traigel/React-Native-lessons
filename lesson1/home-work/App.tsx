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
    ScrollView, ImageSourcePropType
} from 'react-native';

// //@ts-ignore
// import image from './assets/brands/image.json';

const {width} = Dimensions.get('screen')

const WIDTH = width

const img = [require('./assets/brands/1.jpg'), require('./assets/brands/2.jpg'), require('./assets/brands/3.jpg'), require('./assets/brands/4.jpg')]

const brands = new Array(4).fill(null).map((el, index) => ({
    id: index + 1,
    //imgUrl: require(`./assets/brands/2.jpg`)
    imgUrl: img[index],
}))

const catalogTitle = ['Bumpers & Components', 'Fenders & Components', 'Hoods & Components',
    'Grilles', 'Headlights, Components & Accessories', 'Tail Lights, Back Up Lights', 'OE Replica Wheels',
    'Seats, Seat Covers & Accessories', 'Shocks, Struts & Components', 'Other spare parts']


const catalog: CatalogType[] = new Array(10).fill(null).map((_, index) => ({
    id: index + 1,
    title: catalogTitle[index],
    img: `./assets/brands/${index + 1}.jpg`
}))

type BrandsType = {
    id: number
    imgUrl: ImageSourcePropType
}

type CatalogType = {
    id: number
    title: string
    img: string
}

export default function App() {

    const [text, setText] = useState<string>('')

    const renderItemHandler: ListRenderItem<BrandsType> = ({item}) => {
        const imgItem = `./assets/brands/${item.id}.jpg`

        return <View style={{
            borderWidth: 1,
            borderRadius: 5,
            margin: 5
        }}>
            <Image
                style={{
                    width: (WIDTH - 17 * 2) / 2 - 5,
                    height: 35,
                    paddingVertical: 30
                }}
                source={item.imgUrl}
            />
        </View>
    }

    const renderCatalogHandler: ListRenderItem<CatalogType> = ({item}) => {
        return <Pressable onPress={() => alert(`${item.title}: Page is in development`)}>
            <View
                style={{
                    width: (WIDTH - 17 * 2) / 2 - 5,
                    marginHorizontal: 5,
                    marginBottom: 20,
                }}>
                <Image
                    style={{
                        width: (WIDTH - 17 * 2) / 2 - 5,
                        height: (WIDTH - 17 * 2) / 2 - 5,
                    }}
                    source={require(`./assets/catalog/7.jpg`)}
                />
                <Text style={{
                    fontSize: 16,
                    fontWeight: '500',
                    textAlign: 'center',
                    paddingHorizontal: 5
                }}>{item.title}</Text>
            </View>

        </Pressable>
    }

    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.main}>
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
                    <View>
                        <FlatList
                            data={brands}
                            renderItem={renderItemHandler}
                            numColumns={2}
                        />
                    </View>
                    <View>
                        <Image
                            style={styles.imgAdvertising}
                            source={require('./assets/speakers.jpg')}
                        />
                        <View style={styles.advertisingText}>
                            <Text style={styles.advertisingTextTitle}>MOTOR OILS</Text>
                            <Text style={styles.advertisingTextSpan}>Synthetic moto oil with free shipping</Text>
                            <Text style={styles.advertisingTextSpan}>Friction free life guaranteed</Text>
                        </View>
                    </View>
                    <View style={styles.catalogBox}>
                        <FlatList
                            data={catalog}
                            renderItem={renderCatalogHandler}
                            numColumns={2}
                            ListHeaderComponent={() => <View>
                                <Text style={{
                                    fontSize: 26,
                                    fontWeight: '500',
                                    textAlign: 'center',
                                }}>Catalog</Text>
                            </View>}
                        />
                    </View>


                </View>
                <View style={styles.footerBox}>
                    <Text style={styles.copyright}>Copyright © 2022. All Rights Reserved.</Text>
                </View>
                <StatusBar style="auto"/>
            </ScrollView>
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
    main: {
        paddingHorizontal: 10
    },
    headerImg: {
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 55,
        width: WIDTH - 20,
        marginTop: 30,
        marginBottom: 15,
    },
    searchBox: {
        flexDirection: "row",
        justifyContent: 'center',
        width: '100%',
        height: 42,
    },
    inputSearch: {
        height: 42,
        width: '85%',
        borderWidth: 1,
        padding: 10,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
    },
    buttonSearch: {
        width: '15%',
        height: 42,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderLeftWidth: 0,
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
    },
    buttonSearchText: {
        fontSize: 25,
        textAlign: 'center'
    },
    titleLogo: {
        alignItems: 'center',
        position: "absolute",
        zIndex: 2,
        width: '100%',
        top: 65,
        left: 0
    },
    titleTextLogo: {
        color: '#fff',
        fontSize: 18,
        fontWeight: "700",
    },
    imgLogo: {
        width: '100%',
        height: 120,
        marginVertical: 20,
        borderRadius: 5,

    },
    brandsBox: {
        width: '100%',
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
    imgAdvertising: {
        width: '100%',
        height: 200,
        borderRadius: 5,
        marginTop: 20,
        marginBottom: 20
    },
    advertisingText: {
        position: "absolute",
        bottom: 50,
        left: 10,
    },
    advertisingTextTitle: {
        color: '#fff',
        marginBottom: 10,
        fontSize: 20,
    },
    advertisingTextSpan: {
        color: '#fff',
        fontSize: 16,
    },
    catalogBox: {
        marginTop: 10,
    },
    footerBox: {
        backgroundColor: '#c4c4c4',
        width: WIDTH,
        height: 100,
    },
    copyright: {
        textAlign: 'center',
        marginTop: 40
    }
});
