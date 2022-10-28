import {Button, Text, View} from 'react-native';
import {DetailsPropsType, useAppNavigation} from '../types';

export function DetailsScreen({route}: DetailsPropsType) {
    const navigation = useAppNavigation()
    // const {id, name, isDone} = route.params
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Details Screen</Text>
            <Button title={'Jump to Home'} onPress={() => {
                navigation.navigate('Home', {screen: 'Profile'})
            }}/>
            {/*<Text>{id}</Text>*/}
            {/*<Text>{isDone ? 'true' : 'false'}</Text>*/}
            {/*<Text>{name}</Text>*/}
            {/*<Button title={'Jump to Home'} onPress={() => {*/}
            {/*    navigation.navigate('Home')*/}
            {/*}}/>*/}
        </View>
    );
}