import React from "react"
import {StyleSheet, View} from "react-native"
import {DrawerParamList, useAppNavigation} from "../types"
import {createDrawerNavigator} from '@react-navigation/drawer';
import {HomeScreen} from './HomeScreen/HomeScreen';

const Drawer  = createDrawerNavigator<DrawerParamList>();

export function MainHome() {

    const navigation = useAppNavigation()

    return <View style={styles.container}>
        <Drawer.Navigator initialRouteName={'Home'}>
            <Drawer.Screen name={'Home'} component={HomeScreen}/>
            {/*<Drawer.Screen name={'Blog'} component={HomeScreen}/>*/}
            {/*<Drawer.Screen name={'Profile'} component={HomeScreen}/>*/}
            {/*<Drawer.Screen name={'Messages'} component={HomeScreen}/>*/}
        </Drawer.Navigator>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    }
});