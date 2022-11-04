import {StyleSheet, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StackParamList} from './types';
import {Details} from './Details';
import {Home} from './Home';

const Stack = createNativeStackNavigator<StackParamList>();

export const Main = () => {
    return <View style={styles.container}>
        <Stack.Navigator initialRouteName={'Home'}>
            <Stack.Screen name={'Home'} component={Home}/>
            <Stack.Screen name={'Details'} component={Details}/>
        </Stack.Navigator>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});