import { useNavigate } from "react-router";
import { Box, Typography, Button } from "@mui/material";
import ConstructionIcon from "@mui/icons-material/Construction";

const MyHotels = () => {
    const navigate = useNavigate()
    return (
        <Box
            sx={{
                minHeight: "80vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                backgroundColor: "#f9f9f9",
            }}
        >
            <ConstructionIcon sx={{ fontSize: 80, color: "#FFA726", mb: 2 }} />
            <Typography variant="h4" fontWeight={600} gutterBottom>
                The 'My Hotels' section is under development.
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 500 }}>
                We are already laying the wiring, setting up Wi-Fi, and creating a cozy interface.
                Soon you will be able to manage your hotels, edit information, and track bookings here.
            </Typography>

            <Button
                variant="contained"
                color="primary"
                sx={{ marginTop: 4, padding: "10px 24px", textTransform: "none" }}
                onClick={() => navigate(-1)}
            >
                Go back
            </Button>
        </Box>
    );
};

export default MyHotels;