import {Image, Text, View} from 'react-native';
import {DetailsPropsType} from './types';
import {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../store/store';
import {clearPokemonState, qetPokemonById} from '../store/rootSlice';

export function Details(props: DetailsPropsType) {

    // const [pokemon, setPokemon] = useState<Pokemon | null>(null)

    const dispatch = useAppDispatch()
    const pokemon = useAppSelector(state => state.root.pokemon)

    useEffect(() => {
        dispatch(qetPokemonById(props.route.params.url))
        return () => {
            dispatch(clearPokemonState())
        }
    }, [])

    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            {pokemon &&
                <View>
                    <Image style={{
                        width: 200,
                        height: 200
                    }
                    } source={{uri: pokemon.sprites.other['official-artwork'].front_default}}/>
                    <Text>{pokemon.name}</Text>
                </View>
            }
        </View>
    );
}