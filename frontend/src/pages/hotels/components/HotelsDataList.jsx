import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDataHotels } from "../../../store/thunk/fetchDataHotels";

import SortButton from "./SortBtn";
import HotelCards from "./HotelsCards";
import Loader from "../../../components/UI/molecules/Loader";
import AlertErore from "../../../components/UI/molecules/AlertError";
import CityFilterButtons from "./CityFilterButton";

import { Alert } from "@mui/material";
import styles from './hotels.module.css';

function HotelsDataList() {
    const dispatch = useDispatch();
    const { loading, error, sortAsc, filteredHotels } = useSelector((state) => state.hotelsData);


    useEffect(() => {
        dispatch(fetchDataHotels());
    }, [dispatch]);

    if (loading) return <Loader />;
    if (error) return <AlertErore />;


    const sortedHotels = [...filteredHotels].sort((a, b) =>
        sortAsc ? a.hotel_rating - b.hotel_rating : b.hotel_rating - a.hotel_rating
    );

    return (
        <>
            <div className={styles.sort_controls}>
                <CityFilterButtons />
                <SortButton />
            </div>
            <div className={styles.hotel_list}>
                {sortedHotels.length === 0 ? (
                    <div>    
                            <Alert severity="info">
                              We did not find any hotels in the selected city. Try changing the filters.
                            </Alert>
                    </div>
                ) : (
                    sortedHotels.map((hotel) => (
                        <HotelCards key={hotel.id} hotel={hotel} />
                    ))
                )}

            </div>
        </>
    );
}

export default HotelsDataList;
