import { Button, } from "@mui/material";
import styles from "./hotel.module.css";

function HotelDetail({ data = {}, onBack = {} }) {

    return (
        <div className={styles.section}>
            <div className={styles.container}>
                <div
                    className={styles.hotel_baner}
                >
                    <img
                        src={data.imageUrl || "https://image-tc.galaxy.tf/wijpeg-b0xml91jb5xeg5ap4wvvhz4jk/exterior-piccadilly-2.jpg?width=1920"}
                        alt={data.name}
                        className={styles.main_images}
                        onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.08)"}
                        onMouseOut={(e) => e.currentTarget.style.transform = "scale(1)"}
                    />
                </div>

                <div style={{ flex: 2, textAlign: "left" }}>
                    <h1 style={{ fontWeight: "bold", color: "#1976d2", marginBottom: "10px" }}>{data.name}</h1>
                    <p style={{ color: "#6c757d", fontSize: "18px" }}>{data.city}, {data.address}</p>
                    <p style={{ marginTop: "10px" }}>🌍 Country code: {data.country_code}</p>
                    <p>📞 Phone: {data.phone_number || "----"}</p>
                    <p style={{ marginTop: "10px", fontSize: "20px", fontWeight: "bold" }}>
                        ⭐ Rating: {data.hotel_rating ? `⭐ ${data.hotel_rating}` : '⭐'}
                    </p>
                </div>
            </div>
            
            <Button
                variant="contained"
                sx={{
                    marginTop: "16px",
                    paddingLeft: "12px",
                    paddingRight: "12px",
                    paddingTop: "6px",
                    paddingBottom: "6px",
                    fontSize: "16px",
                    fontWeight: "bold",
                    borderRadius: 2,
                    transition: "background-color 0.3s ease-in-out"
                }}
                onClick={onBack}
            >
                ⬅ Back
            </Button>
        </div>
    )
}
export default HotelDetail
