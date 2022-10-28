import {NavigationProp, NavigatorScreenParams, useNavigation} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type StackParamList = {
    Home: NavigatorScreenParams<NStackParamList>
    Users: undefined
    Details: undefined
    // Details: {
    //     id: number
    //     name: string
    //     isDone: boolean
    // }
}

// N - вложенный элемент
export type NStackParamList = {
    Profile: undefined
    Settings: undefined
    Jobs: undefined
}

export type DetailsPropsType = NativeStackScreenProps<StackParamList, 'Details'>

type UseNavigationType = NavigationProp<StackParamList>

export const useAppNavigation = () => useNavigation<UseNavigationType>()
