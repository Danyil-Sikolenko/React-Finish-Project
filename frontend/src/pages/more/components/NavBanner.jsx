import { useNavigate } from "react-router";
import CustomButton from "../../../components/UI/atoms/CustomButton";
import styles from "./more.module.css";

function NavBanner() {

    const navigate = useNavigate();
    return (

        <div className={styles.bespoke_container}>
            <div className={styles.bespoke_banner}></div>
            <h3 className={styles.bespoke_title}>Bespoke spaces</h3>
            <p className={styles.bespoke_sub_title}>Expertly designed to create extraordinary spaces with the flexible renter in mind</p>
            <CustomButton variant="contained" sx={{
                backgroundColor: "#064749",
                color: "#fff",
                borderRadius: "40px",
                padding: "12px 40px",
                marginLeft: "80px",
                bottom: "-120px",
                '&:hover': {
                    backgroundColor: "#0a5c5d",
                    boxShadow: "0px 6px 14px rgba(0, 0, 0, 0.25)",
                }
            }}
                onClick={() => navigate('/')}
            >
                Start booking
            </CustomButton>
        </div>
    )
}
export default NavBanner