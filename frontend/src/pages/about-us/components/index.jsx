import { Box, Divider, Chip, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import HotelIcon from "@mui/icons-material/Hotel";
import LockIcon from "@mui/icons-material/Lock";
import BuildIcon from "@mui/icons-material/Build";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import DnsIcon from "@mui/icons-material/Dns";
import PersonIcon from "@mui/icons-material/Person";

const AboutProject = () => {
  return (
    <>
    <Box sx={{ padding: 4, maxWidth: 900, mx: "auto", backgroundColor: 'rgba(204, 245, 226, 0.3)', borderRadius: 3, boxShadow: 4 , marginBottom:'10px'}}>
      <h1 style={{ fontWeight: 700, marginBottom: "16px", textAlign:'center'}} >
        🏗️ Booking Clone — Project Overview
      </h1>
      <Divider sx={{ my: 2 }} />

      <Chip label="Frontend: React 19 + Vite" color="primary" sx={{ marginBottom: 2 }} />

      <h2 >🔐 User authentication</h2>
      <List dense>
        <ListItem >
          <ListItemIcon><LockIcon /></ListItemIcon>
          <ListItemText
            primary="Registration and login are implemented using Formik and Yup."
            secondary="Each field of the form is validated according to the specified schema. Error notifications appear in real time."
          />
        </ListItem>
        <ListItem >
          <ListItemIcon><DnsIcon /></ListItemIcon>
          <ListItemText
            primary="Asynchronous requests through Redux Thunk"
            secondary="Sign up and login are connected to the API, and the result is saved in the global state."
          />
        </ListItem>
        <ListItem >
          <ListItemIcon><CheckCircleIcon /></ListItemIcon>
          <ListItemText
            primary="The user's session is stored in localStorage."
            secondary="When rebooting, the user remains logged in until they log out manually."
          />
        </ListItem>
      </List>

      <h2 >🛏️ Working with hotel data</h2>
      <List dense>
        <ListItem >
          <ListItemIcon><HotelIcon /></ListItemIcon>
          <ListItemText
            primary="Getting a list of hotels through Redux Toolkit"
            secondary="The thunk request fetchDataHotels loads the current data and saves it in the store."
          />
        </ListItem>
        <ListItem >
          <ListItemIcon><CheckCircleIcon /></ListItemIcon>
          <ListItemText
            primary="Filtering by cities, sorting by rating"
            secondary="Flexible logic allows the user to find the needed objects instantly."
          />
        </ListItem>
        <ListItem >
          <ListItemIcon><BuildIcon /></ListItemIcon>
          <ListItemText
            primary="Material UI hotel cards"
            secondary="Each hotel is displayed as an interactive card with an image, rating, and name."
          />
        </ListItem>
      </List>

      <h2 >⚙️ Technical stack and infrastructure</h2>
      <List dense>
        <ListItem >
          <ListItemIcon><BuildIcon /></ListItemIcon>
          <ListItemText primary="React Router v7" secondary="SPA navigation between the pages of the application without reloading."/>
        </ListItem>
        <ListItem >
          <ListItemIcon><CloudUploadIcon /></ListItemIcon>
          <ListItemText primary="Material UI 7 + @emotion" secondary="Components and custom styles with a high degree of adaptability." />
        </ListItem>
        <ListItem >
          <ListItemIcon><CheckCircleIcon /></ListItemIcon>
          <ListItemText primary="Vite for building" secondary="Lightning-fast launch and convenient development thanks to modern tools." />
        </ListItem>
        <ListItem >
          <ListItemIcon><DnsIcon /></ListItemIcon>
          <ListItemText primary="ESLint and plugins" secondary="Code quality control, following best practices."/>
        </ListItem>
      </List>

      <h2>🧠 UX features</h2>
      <List dense>
        <ListItem>
          <ListItemIcon><CheckCircleIcon /></ListItemIcon>
          <ListItemText primary="Loader and error component" secondary="The user always sees a loading indicator or notification when an error occurs." />
        </ListItem>
        <ListItem >
          <ListItemIcon><BuildIcon /></ListItemIcon>
          <ListItemText primary="Messages about empty output" secondary="If the filtering does not yield results, the user sees a clear notification." />
        </ListItem>
        <ListItem >
          <ListItemIcon><PersonIcon /></ListItemIcon>
          <ListItemText primary="Adaptive layout + component architecture" secondary="The interface is equally convenient on any device." />
        </ListItem>
      </List>

      <Divider sx={{ my: 3 }} />

      <h2 >🌐 Backend — Node.js + Express 5</h2>
      <List dense>
        <ListItem >
          <ListItemIcon><BuildIcon /></ListItemIcon>
          <ListItemText
            primary="Implementation of REST API with routes"
            secondary="/signup, /login, /hotels (GET, POST), possible filtering and profile"
          />
        </ListItem>
        <ListItem >
          <ListItemIcon><CloudUploadIcon /></ListItemIcon>
          <ListItemText primary="Setting up CORS, Nodemon" secondary="Safe development with hot reloading and frontend access." />
        </ListItem>
      </List>

      <Divider sx={{ my: 3 }} />

      <p style={{ textAlign: "center", color: "#555" }} >
        🛠️ Opportunities for development: Private Routes, user roles, uploading and editing hotels, booking integration, expanding logic on the server, and synchronization with the client.
      </p>
    </Box>
     <p style={{
        fontSize:'14px',
        textAlign:'center',
        opacity:'0.7',
        transition:'0.3 easy'
       }}>&copy; 2025 Danyil.</p>
       </>
  );
};

export default AboutProject;