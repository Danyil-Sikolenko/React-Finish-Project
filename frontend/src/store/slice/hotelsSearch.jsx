import { createSlice } from "@reduxjs/toolkit";
import { searchHotelsByQuery } from "../thunk/fetchDataHotels";

const hotelSearchSlice = createSlice({
  name: 'hotelSearch',
  initialState: {
    results: [],
    loading: false,
    error: null
  },
  reducers: {
    clearSearchResults(state) {
      state.results = [];
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(searchHotelsByQuery.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(searchHotelsByQuery.fulfilled, (state, action) => {
        state.loading = false;
        state.results = action.payload;
      })
      .addCase(searchHotelsByQuery.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
});

export const { clearSearchResults } = hotelSearchSlice.actions;
export default hotelSearchSlice.reducer;

