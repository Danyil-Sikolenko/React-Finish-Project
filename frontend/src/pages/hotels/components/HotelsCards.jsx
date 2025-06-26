import { useNavigate } from 'react-router';

import Button from '@mui/material/Button';
import styles from './hotels.module.css';

function HotelCards({ hotel }) {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate(`/hotel/${hotel.id}`)
    }

    return (
        <div className={styles.hotel_card}>
            <img src={hotel.imageUrl || "https://image-tc.galaxy.tf/wijpeg-b0xml91jb5xeg5ap4wvvhz4jk/exterior-piccadilly-2.jpg?width=1920"} 
                alt={hotel.name} className={styles.hotel_image} />
            <div className={styles.hotel_info}>
                <h2>{hotel.name}</h2>
                <p><strong>Аdress:</strong> {hotel.address}, {hotel.city}</p>
                <p><strong>Rating:</strong> {hotel.hotel_rating}⭐</p>
                <Button
                onClick={handleNavigate}
                 style={{
                    marginTop: "10px",
                    padding: "8px 12px",
                    backgroundColor: "#007bff",
                    color: "#ffffff",
                    border: "none",
                    cursor: "pointer",
                    fontSize: "16px",
                 }} variant="contained">See more about hotel 
                 </Button>
            </div>
        </div>
    );
}

export default HotelCards;
