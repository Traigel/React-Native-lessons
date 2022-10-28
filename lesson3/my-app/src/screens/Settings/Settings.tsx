import {Button, Text, View} from 'react-native';
import {useAppNavigation} from '../types';

export function SettingsScreen() {
    const navigation = useAppNavigation()
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Settings Screen</Text>
            <Button title={'Jump to Jobs'} onPress={() => {
                navigation.navigate('Home', {screen: 'Jobs'})
            }}/>
        </View>
    );
}