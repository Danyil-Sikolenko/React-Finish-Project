import { createAsyncThunk } from "@reduxjs/toolkit";

export const API_DATA_HOTELS = 'http://localhost:3000/data';

export const fetchDataHotels = createAsyncThunk(
    'data/getDataHotels',
    async (_, { rejectWithValue }) => {
        try {
            const response = await fetch(API_DATA_HOTELS, {
              method: 'GET',
              headers: { "Content-Type": "application/json" },
            });
            
            if (!response.ok) {
                throw new Error('FETCH ERROR');
            }
            const data = await response.json()


            return {
                destinations: data.destination,
                hotels: data.hotels, 
            };
        }
        catch (err) {

            return rejectWithValue(err.message)

        }

    }
)


export const searchHotelsByQuery = createAsyncThunk(
  'data/searchHotelsByQuery',
  async (query, { rejectWithValue }) => {
    try {
      const response = await fetch(`http://localhost:3000/search/hotels?query=${encodeURIComponent(query)}`);
      if (!response.ok) {
        throw new Error('Error searching for hotels');
      }
      const data = await response.json(); 
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);


export const fetchCities = createAsyncThunk(
  'city/fetchCities',
  async () => {
  const res = await fetch('http://localhost:3000/cities');
  return await res.json();
});



