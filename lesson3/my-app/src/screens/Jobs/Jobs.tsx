import {Button, Text, View} from 'react-native';
import {useAppNavigation} from '../types';

export function JobsScreen() {
    const navigation = useAppNavigation()
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Jobs Screen</Text>
            <Button title={'Jump to Profile'} onPress={() => {
                navigation.navigate('Home', {screen: 'Profile'})
            }}/>
        </View>
    );
}