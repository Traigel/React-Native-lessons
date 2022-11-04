import {createAction, createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {api, Pokemon, PokemonItem} from '../api/api';

export const qetAllPokemon = createAsyncThunk<PokemonItem[], void>(
    'root/qetAllPokemon',
    async (_, {dispatch, rejectWithValue}) => {
        try {
            const res = await api.getAllPokemon()
            return res.data.results
        } catch (error) {
            return rejectWithValue(null)
        } finally {

        }
    }
)

export const qetPokemonById = createAsyncThunk<Pokemon, string>(
    'root/qetPokemonById',
    async (param, {dispatch, rejectWithValue}) => {
        try {
            const res = await api.getPokemonById(param)
            return res.data
        } catch (error) {
            return rejectWithValue(null)
        } finally {

        }
    }
)

export const clearPokemonState = createAction('root/clearPokemonState')

const rootSlice = createSlice({
    name: 'root',
    initialState: {
        allPokemon: [] as PokemonItem[],
        pokemon: null as Pokemon | null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(qetAllPokemon.fulfilled, (state, action) => {
                state.allPokemon = action.payload
            })
            .addCase(qetPokemonById.fulfilled, (state, action) => {
                state.pokemon = action.payload
            })
            .addCase(clearPokemonState, state => {
                state.pokemon = null
            })
    }
})

export const root = rootSlice.reducer