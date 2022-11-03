import {NavigationProp, NavigatorScreenParams, useNavigation} from '@react-navigation/native';

export type StackParamList = {
    // MainHome: NavigatorScreenParams<DrawerParamList>
    Login: undefined
    Registration: undefined
    RecPassword: undefined
}

export type DrawerParamList = {
    Home: undefined
    // Blog: undefined
    // Profile: undefined
    // Messages: undefined
}

type UseNavigationType = NavigationProp<StackParamList>

export const useAppNavigation = () => useNavigation<UseNavigationType>()