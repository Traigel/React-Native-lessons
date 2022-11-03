import {createNativeStackNavigator} from "@react-navigation/native-stack";
import React from "react"
import {StyleSheet, View} from 'react-native';
import {LoginScreen} from "./LoginScreen/LoginScreen";
import {StackParamList} from "./types";
import {MainHome} from './MainHome/MainHome';
import { RegistrationScreen } from "./RegistrationScreen/RegistrationScreen";
import { RecPasswordScreen } from "./RecPasswordScreen/RecPasswordScreen";

const Stack = createNativeStackNavigator<StackParamList>();

export const Main = () => {

    return <View style={styles.container}>
        <Stack.Navigator initialRouteName={'Login'}>
            {/*<Stack.Screen name={'MainHome'} component={MainHome}/>*/}
            <Stack.Screen name={'Login'} component={LoginScreen}/>
            <Stack.Screen name={'Registration'} component={RegistrationScreen}/>
            <Stack.Screen name={'RecPassword'} component={RecPasswordScreen}/>
        </Stack.Navigator>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
});