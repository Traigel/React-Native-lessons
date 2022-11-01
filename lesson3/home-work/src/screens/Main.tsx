import {createNativeStackNavigator} from "@react-navigation/native-stack";
import React from "react"
import {StyleSheet, View} from 'react-native';
import {StackParamList} from "./types";

const Stack = createNativeStackNavigator<StackParamList>();

export const Main = () => {

    return <View style={styles.container}>
        <Stack.Navigator initialRouteName={'Login'}>
            <Stack.Screen name={'Home'} component={HomeScreen}/>
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