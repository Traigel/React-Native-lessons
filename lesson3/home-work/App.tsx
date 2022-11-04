import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Main} from './src/screens/Main';
import {Dimensions} from 'react-native';

// const {width} = Dimensions.get('screen')
// export const WIDTH = width

export default function App() {
    return (
        <NavigationContainer>
            <Main/>
        </NavigationContainer>
    );
}


