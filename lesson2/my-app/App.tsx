import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, TouchableOpacity, View, Animated} from 'react-native';
import {HomeSvg} from "./src/images/homeSvg/HomeSvg";
import {ActivitySvg} from "./src/images/activitySvg/ActivitySvg";
import {CalendarSvg} from "./src/images/calendarSvg/CalendarSvg";
import {SliderSvg} from "./src/images/sliderSvg/SliderSvg";
import {useEffect, useRef, useState} from 'react';

type ActiveNameSvgType = 'home' | 'calendar' | 'activity' | 'slider'

export default function App() {

    const [active, setActive] = useState<ActiveNameSvgType>('home')

    const animationValue = useRef(new Animated.Value(0)).current
    const animationValue2 = useRef(new Animated.Value(0)).current

    useEffect(() => {
            Animated.loop(
                Animated.stagger(1500, [
                    Animated.timing(animationValue, {
                        toValue: 150,
                        duration: 1500,
                        useNativeDriver: true,
                    }),
                    Animated.timing(animationValue, {
                        toValue: 0,
                        duration: 1500,
                        useNativeDriver: true,
                    }),
                ])).start()

            // Animated.loop(
            //     Animated.timing(animationValue, {
            //         toValue: 150, // на сколько измениться value
            //         duration: 2000, // за сколько времени будут изменения
            //         useNativeDriver: true, // почти всегда true
            //     })).start()
            // Animated.timing(animationValue, {
            //     toValue: 150, // на сколько измениться value
            //     duration: 3000, // за сколько времени будут изменения
            //     useNativeDriver: true, // почти всегда true
            // }).start()
            //     => {
            //     Animated.timing(animationValue, {
            //         toValue: 0, // на сколько измениться value
            //         duration: 3000, // за сколько времени будут изменения
            //         useNativeDriver: true, // почти всегда true
            //     }).start()
            // }) // старт анимации
        }
        ,
        []
    )

    return (
        <View style={styles.container}>
            <Animated.View
                style={[
                    {width: 100, height: 100, backgroundColor: '#082c02'},
                    {
                        transform: [
                            {translateX: animationValue},
                            {translateY: animationValue2}
                        ]
                    }
                ]}
            >

            </Animated.View>
            <View style={styles.svgBox}>
                <TouchableOpacity
                    activeOpacity={1}
                    style={[styles.item, {backgroundColor: active !== 'home' ? '#31008f' : '#d55a5a'}]}
                    onPress={() => {
                        setActive('home')
                    }}
                    hitSlop={{top: 15, bottom: 15, left: 15, right: 15}}
                >
                    <HomeSvg color={active === 'home' ? '#000' : '#fff'}/>
                </TouchableOpacity>
                <TouchableOpacity
                    activeOpacity={1}
                    style={[styles.item, {backgroundColor: active !== 'activity' ? '#31008f' : '#d55a5a'}]}
                    onPress={() => {
                        setActive('activity')
                    }}
                    hitSlop={{top: 15, bottom: 15, left: 15, right: 15}}
                >
                    <ActivitySvg color={active === 'activity' ? '#000' : '#fff'}/>
                </TouchableOpacity>
                <TouchableOpacity
                    activeOpacity={1}
                    style={[styles.item, {backgroundColor: active !== 'calendar' ? '#31008f' : '#d55a5a'}]}
                    onPress={() => {
                        setActive('calendar')
                    }}
                    hitSlop={{top: 15, bottom: 15, left: 15, right: 15}}
                >
                    <CalendarSvg color={active === 'calendar' ? '#000' : '#fff'}/>
                </TouchableOpacity>
                <TouchableOpacity
                    activeOpacity={1}
                    style={[styles.item, {backgroundColor: active !== 'slider' ? '#31008f' : '#d55a5a'}]}
                    onPress={() => {
                        setActive('slider')
                    }}
                    hitSlop={{top: 5, bottom: 5, left: 5, right: 5}}
                >
                    <SliderSvg color={active === 'slider' ? '#000' : '#fff'}/>
                </TouchableOpacity>
            </View>

            <StatusBar style="auto"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    svgBox: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    item: {
        backgroundColor: '#31008f',
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25
    }
});
