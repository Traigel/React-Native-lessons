import React from "react"
import {StyleSheet, Text, View} from "react-native"
import {useAppNavigation} from "../../types"

export function HomeScreen () {

    const navigation = useAppNavigation()

    return <View style={styles.container}>
        <Text>HomeScreen</Text>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
});