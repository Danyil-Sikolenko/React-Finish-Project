import { useDispatch, useSelector } from "react-redux";
import { filterHotelsByCity } from "../../../store/slice/dataHotelsSlice";
import styles from "./hotels.module.css"
import Button from "@mui/material/Button"
import CustomButton from "../../../components/UI/atoms/CustomButton";

function CityFilterButtons() {
    const dispatch = useDispatch();
    const { destinations } = useSelector((state) => state.hotelsData);

    const uniqueCities = [...new Set(destinations.map(item => item.label))];

    return (
        <div className={styles.container}>
             <CustomButton variant="contained" sx={{  
            backgroundColor: "#FF5722", 
            marginBottom: "20px",
            color: "#ffffff",
            fontWeight: "bold",
            padding: "10px 20px",
            borderRadius: "8px",
            fontSize: "1rem",
            textTransform: "uppercase",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
            '&:hover': {
                backgroundColor: "#e64a19",
                boxShadow: "0px 6px 14px rgba(0, 0, 0, 0.25)",
                }
                }}

             onClick={() => dispatch(filterHotelsByCity(null))}>
                All Cities!
            </CustomButton>
            <div className={styles.container_btn}>
           
            {uniqueCities.map((city) => (
                <Button variant="contained" key={city} onClick={() => dispatch(filterHotelsByCity(city))}>
                    {city}
                </Button>
            ))}
            </div>
        </div>
    );

}

export default CityFilterButtons;