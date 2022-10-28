import {StyleSheet, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from './Home/Home';
import {DetailsScreen} from './Details/Details';
import {UsersScreen} from './Users/Users';
import {StackParamList} from './types';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';

// нельзя вызывать внутри компоненты
// const Stack = createNativeStackNavigator<StackParamList>();
const Stack = createBottomTabNavigator<StackParamList>();
// const Drawer  = createDrawerNavigator<StackParamList>();

export const Main = () => {
    return <View style={styles.container}>
        <Stack.Navigator initialRouteName={'Home'} screenOptions={{tabBarActiveTintColor: 'red'}}>
            <Stack.Screen name={'Home'} component={HomeScreen}/>
            <Stack.Screen name={'Users'} component={UsersScreen}/>
            <Stack.Screen name={'Details'} component={DetailsScreen}/>
        </Stack.Navigator>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});