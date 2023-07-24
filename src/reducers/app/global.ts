import {createSlice} from '@reduxjs/toolkit';

export interface IGlobalState {};

const initialState: IGlobalState = {};

const globalSlice = createSlice({
    name: 'global',
    initialState,
    reducers: {}
});

const globalReducer = globalSlice.reducer;

export default globalReducer;