import { createAsyncThunk } from "@reduxjs/toolkit";

export const API_DATA_HOTELS = 'http://localhost:3000/data';

export const fetchDataHotels = createAsyncThunk(
    'data/getDataHotels',
    async (_, { rejectWithValue }) => {
        try {
            const response = await fetch(API_DATA_HOTELS);
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
// нужно создать гет запрос на пошук за инпутом



