import React, {useState} from "react"
import {Button, StyleSheet, Text, TextInput, View} from "react-native"
import {useAppNavigation} from "../types"
import {WIDTH} from '../../../App';

export function RegistrationScreen() {

    const navigation = useAppNavigation()

    const [valueUsername, setValueUsername] = useState<string>('')
    const [valueEmail, setValueEmail] = useState<string>('')
    const [valuePassword, setValuePassword] = useState<string>('')

    return <View style={styles.container}>
        <Text>Create an account</Text>
        <TextInput
            style={styles.input}
            onChangeText={setValueUsername}
            value={valueUsername}
            placeholder={'Username'}
        />
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
        <Button title={'Sign Up'} onPress={() => {
            navigation.navigate('Login')
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
    }
});