import { createSlice } from "@reduxjs/toolkit";
import { fetchDataHotels } from "../thunk/fetchDataHotels";


const initialState = { 
    destinations: [],
    hotels: [],
    loading: false,
    error: null,
    sortAsc: false, 
    filteredHotels: [], 
}

const dataHotesSlice = createSlice( { 
    name: 'dataHotels', 
    initialState,
    reducers: {
        toggleSortOrder: (state) => {
            state.sortAsc = !state.sortAsc;
        },
        filterHotelsByCity: (state, action) => {
        state.filteredHotels = action.payload 
        ? state.hotels.filter(hotel => hotel.city === action.payload) 
        : state.hotels;
},

    }, 


    extraReducers:(builder) => {
        builder
        .addCase (fetchDataHotels.pending , (state) => {
            state.loading.true
        })

        .addCase (fetchDataHotels.fulfilled, (state ,action) => {
            state.loading = false
            // console.log("Данные записаны в Redux:", action.payload);
            //  console.log(" Данные отелей из API:", action.payload.hotels);

            state.destinations = action.payload.destinations;
            // console.log(action.payload.destinations) // Сохраняем `destination`
            state.hotels = action.payload.hotels; 
            state.filteredHotels = action.payload.hotels; // это мы сохранили уже в моменте когда делали сотировку по городам 



        })

        .addCase (fetchDataHotels.rejected , (state, action) => {
            state.loading = false
            state.error = action.payload
        })

    }

});
export default dataHotesSlice.reducer;
export const { toggleSortOrder , filterHotelsByCity } = dataHotesSlice.actions;