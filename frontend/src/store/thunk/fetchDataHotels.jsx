import { createAsyncThunk } from "@reduxjs/toolkit";

const API_DATA_HOTELS = 'http://localhost:3000/data';

export const fetchDataHotels = createAsyncThunk(
    'data/getDataHotels',
    async (_, { rejectWithValue }) => {
        try {
            const response = await fetch(API_DATA_HOTELS);
            if (!response.ok) {
                throw new Error('FETCH ERROR');
            }
            const data = await response.json()

            console.log(" Полученные данные:", data); // Проверяем JSON-ответ

            return {
                destinations: data.destination, // Сохраняем массив `destination`
                hotels: data.hotels, // Сохраняем массив `hotels`
            };
             //потому что у нас несколько масивов в обьекте поэотму такая запись 
        }
        catch (err) {

            return rejectWithValue(err.message)

        }

    }
)