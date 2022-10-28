import {Button, Text, View} from 'react-native';
import {useAppNavigation} from '../types';

export function UsersScreen() {
    const navigation = useAppNavigation()
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>User Screen</Text>
            <Button title={'Jump to Details'} onPress={() => {
                navigation.navigate('Details',
                    //     {
                    //     id: 12345,
                    //     name: 'Vladimir',
                    //     isDone: true
                    // }
                )
            }}/>
        </View>
    );
}