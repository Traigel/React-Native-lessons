import React, {useState} from "react"
import {Button, StyleSheet, Text, TextInput, View} from "react-native"
import {useAppNavigation} from "../types"
import {WIDTH} from '../../../App';
import {TouchableHighlight} from "react-native";

export function LoginScreen() {

    const navigation = useAppNavigation()

    const [valueEmail, setValueEmail] = useState<string>('')
    const [valuePassword, setValuePassword] = useState<string>('')

    return <View style={styles.container}>
        <Text>Sign In</Text>

        <TextInput
            style={styles.input}
            onChangeText={setValueEmail}
            value={valueEmail}
            placeholder={'Email'}
        />
        <TextInput
            style={styles.input}
            onChangeText={setValuePassword}
            value={valuePassword}
            placeholder={'Password'}
        />
        <Button title={'Login'} onPress={() => {
            navigation.navigate('MainHome', {screen: 'Home'})
        }}/>

        <Text>Forgot Password? </Text>
        <TouchableHighlight
            onPress={() => {
                navigation.navigate('RecPassword')
            }}
        >
            <Text style={styles.link}>Reset Password</Text>
        </TouchableHighlight>

        <Text>Dont have any account?</Text>
        <Button title={'Create an account'} onPress={() => {
            navigation.navigate('Registration')
        }}/>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        width: WIDTH / 2,
        height: 40,
        backgroundColor: '#525252',
        marginVertical: 20
    },
    link: {
        textDecorationLine: 'underline',
    }
});