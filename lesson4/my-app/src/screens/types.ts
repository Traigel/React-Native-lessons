import {NavigationProp, useNavigation} from "@react-navigation/native"
import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type StackParamList = {
    Home: undefined
    Details: {
        url: string
    }
}

export type DetailsPropsType = NativeStackScreenProps<StackParamList, 'Details'>

export type NavigationUseType = NavigationProp<StackParamList>

export const useAppNavigation = () => useNavigation<NavigationUseType>()

