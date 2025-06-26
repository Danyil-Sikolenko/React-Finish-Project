import { configureStore } from "@reduxjs/toolkit";
import dataHotelReduser from "./slice/dataHotelsSlice.jsx";
import citySlice from "./slice/citySelector.jsx";
import hotelsSearch from "./slice/hotelsSearch.jsx";
import authSlice from "./slice/authSlice.jsx";

const store = configureStore({
    reducer: {
        hotelsData: dataHotelReduser,
        city: citySlice,
        hotelsSearch: hotelsSearch,
        auth: authSlice,
    }
})

export default store