import {FlatList, ListRenderItem, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {api, PokemonItem} from '../api/api';
import {useAppNavigation} from './types';
import {useAppDispatch, useAppSelector} from '../store/store';
import {qetAllPokemon} from '../store/rootSlice';

export function Home() {

    // const [allPokemon, setAllPokemon] = useState<PokemonItem[]>([])
    const navigate = useAppNavigation()
    const dispatch = useAppDispatch()
    const allPokemon = useAppSelector(state => state.root.allPokemon)

    useEffect(() => {
        dispatch(qetAllPokemon())
    }, [])

    const render: ListRenderItem<PokemonItem> = ({item}) => {
        return <TouchableOpacity onPress={() => {
            navigate.navigate('Details', {url: item.url})
        }
        }>
            <View style={styles.item}>
                <Text>{item.name}</Text>
            </View>
        </TouchableOpacity>
    }

    return (
        <View style={{
            paddingHorizontal: 20
        }}
        >
            <FlatList
                data={allPokemon}
                renderItem={render}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    item: {
        borderWidth: 1,
        borderRadius: 15,
        paddingHorizontal: 15,
        paddingVertical: 10,
        marginVertical: 5,
    },
})
