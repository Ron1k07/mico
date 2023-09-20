import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    data: [],
    loading: false,
    error: null,
};

const dataSlice = createSlice({
    name: 'data',
    initialState,
    reudcers: {
        getDataRequest: (state) => {
            state.loading = true;
            state.error = null;
        },
        getDataSucces: (state, action) => {
            state.loading = false;
            state.data = action.payload;
        },
        getDataFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const { getDataRequest, getDataSucces, getDataFailure } = dataSlice.actions;

export default dataSlice.reducer;