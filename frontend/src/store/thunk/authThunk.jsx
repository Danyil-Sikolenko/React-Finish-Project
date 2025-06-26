import { createAsyncThunk } from "@reduxjs/toolkit";

const API_DATA_HOTELS = 'http://localhost:3000';

export const login = createAsyncThunk(
    "auth/login",
    async ({ email, password }, { rejectWithValue }) => {
        try {
            const response = await fetch(`${API_DATA_HOTELS}/login`, {
                method: 'POST',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify( { email, password } )
            });

            if (!response.ok) {
                throw new Error('Error!')
            }

            const data = await response.json();
            return data;


        }
        catch (e) {
            return rejectWithValue(e.message)


        }
    }
)

export const signUp = createAsyncThunk(
    "auth/signUp",
    async ( { name, email, password }, { rejectWithValue } ) => {
        try {
            const response = await fetch(`${API_DATA_HOTELS}/signup`, {
                method: 'POST',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify({ name, email, password })
            });

            if (!response.ok) {
                throw new Error('Error!')
            }

            const data = await response.json();
            return data;


        }
        catch (e) {
            return rejectWithValue(e.message)


        }
    }
)


