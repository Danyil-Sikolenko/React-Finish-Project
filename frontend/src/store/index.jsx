import { configureStore } from "@reduxjs/toolkit";
import dataHotelReduser from "./slice/dataHotelsSlice.jsx";

const store = configureStore({
    reducer: {
        hotelsData: dataHotelReduser,
    }
})

export default store