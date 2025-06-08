import { createSlice } from "@reduxjs/toolkit";
import { fetchDataHotels } from "../thunk/fetchDataHotels";

const initialState = { 
    destinations: [],
    hotels: [],
    loading: false,
    error: null 
}

const dataHotesSlice = createSlice( { 
    name: 'Data-Hotels',
    initialState,
    reducers: {}, 

    extraReducers:(builder) => {
        builder
        .addCase (fetchDataHotels.pending , (state) => {
            state.loading.true
        })

        .addCase (fetchDataHotels.fulfilled, (state ,action) => {
            state.loading =false
            state.items = action.payload
            console.log("Данные записаны в Redux:", action.payload);
            state.destinations = action.payload.destinations; 
            state.hotels = action.payload.hotels; 


        })
        .addCase (fetchDataHotels.rejected , (state, action) => {
            state.loading = false
            state.error = action.payload
        })

    }

});
export default dataHotesSlice.reducer