import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#fafafa",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: 4,
      }}
    >
      <SentimentVeryDissatisfiedIcon sx={{ fontSize: 100, color: "#FF5722" }} />
      <h1 style={{ fontSize: "3rem", marginTop: 10 }}>404 — Page not found</h1>
      <p style={{ color: "#666", maxWidth: 600, marginTop: 16 }}>
       Oops! It seems that such a page does not exist. You may have entered an incorrect address or this page has been deleted.
      </p>

      <Button
        variant="contained"
        color="primary"
        sx={{ marginTop: 4, padding: "10px 24px", textTransform: "none" }}
        onClick={() => navigate("/")}
      >
       Return to main page
      </Button>
    </Box>
  );
};

export default NotFoundPage;