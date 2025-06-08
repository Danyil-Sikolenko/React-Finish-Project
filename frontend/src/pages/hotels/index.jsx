import { useState, useEffect } from "react";
import { useDispatch , useSelector} from "react-redux";
import { fetchDataHotels } from "../../store/thunk/fetchDataHotels";


function HotelsDataList  () {
    const dispatch = useDispatch()
    const { loading ,destinations, hotels , error } = useSelector ((state) => state.hotelsData )

    useEffect( () => {
        dispatch(fetchDataHotels())
    } , [dispatch])
    console.log(destinations)

    return(
        <div>
            <ul>
                {destinations.map(city => (
                    <li key={city.id}>{city.label}</li>
                ))}
            </ul>
            <ul>
                {hotels.map((item) => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>

        </div>
    )
}
export default HotelsDataList

