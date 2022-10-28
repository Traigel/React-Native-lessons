import {Button, Text, View} from 'react-native';
import {useAppNavigation} from '../types';

export function ProfileScreen() {
    const navigation = useAppNavigation()
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Profile Screen</Text>
            <Button title={'Jump to Settings'} onPress={() => {
                navigation.navigate('Home', {screen: 'Settings'})
            }}/>

            <Button title={'Jump to Users'} onPress={() => {
                navigation.navigate('Users')
            }}/>
        </View>
    );
}