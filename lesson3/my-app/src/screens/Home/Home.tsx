import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Button, Text, View} from 'react-native';
import {NStackParamList, useAppNavigation} from '../types';
import {ProfileScreen} from '../Profile/Profile';
import {SettingsScreen} from '../Settings/Settings';
import {JobsScreen} from '../Jobs/Jobs';

const Stack = createNativeStackNavigator<NStackParamList>();

export function HomeScreen() {
    const navigation = useAppNavigation()
    return (
        <View style={{flex: 1}}>
            <Stack.Navigator screenOptions={{animation: 'flip'}}>
                <Stack.Screen name={'Profile'} component={ProfileScreen}/>
                <Stack.Screen name={'Settings'} component={SettingsScreen}/>
                <Stack.Screen name={'Jobs'} component={JobsScreen}/>
            </Stack.Navigator>
        </View>
    );
}