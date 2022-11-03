import React, {useState} from "react"
import {Button, StyleSheet, Text, TextInput, View} from "react-native"
import {useAppNavigation} from "../types"
import {WIDTH} from '../../../App';

export function RecPasswordScreen() {

    const navigation = useAppNavigation()

    const [valueEmail, setValueEmail] = useState<string>('')

    return <View style={styles.container}>
        <Text>Forget Password</Text>

        <TextInput
            style={styles.input}
            onChangeText={setValueEmail}
            value={valueEmail}
            placeholder={'Email'}
        />
        <Button title={'Show password'} onPress={() => {
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