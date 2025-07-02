import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_PATHS } from "../../services/api/index"

export const fetchDataHotels = createAsyncThunk(
    'data/getDataHotels',
    async (_, { rejectWithValue }) => {
        try {
            const response = await fetch(API_PATHS.DATA_HOTELS, {
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
      const response = await fetch(`${API_PATHS.SEARCH_HOTELS}?query=${encodeURIComponent(query)}`);
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
  const res = await fetch(API_PATHS.CITIES);
  return await res.json();
});



