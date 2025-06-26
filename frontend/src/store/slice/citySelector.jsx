
import { createSlice } from '@reduxjs/toolkit';
import { fetchCities } from '../thunk/fetchDataHotels';



const citySlice = createSlice({
  name: 'city',
  initialState: {
    selectedCity: '',
    cities: [],
    loading: false,
    error: null
  },
  reducers: {
    setSelectedCity(state, action) {
      state.selectedCity = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCities.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCities.fulfilled, (state, action) => {
        state.loading = false;
        state.cities = action.payload;
      })
      .addCase(fetchCities.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});

export const { setSelectedCity } = citySlice.actions;
export default citySlice.reducer;