import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import Loader from "../../../components/UI/molecules/Loader";
import AlertErorre from "../../../components/UI/molecules/AlertError"

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';


function ListResult() {
  const { results, loading, error } = useSelector((state) => state.hotelsSearch);
  const navigate = useNavigate()

  const handleNavigate = (id) => {
    navigate(`/hotel/${id}`)
  }

  if (loading) return <Loader />
  if (error) return <AlertErorre />

  return (
    <>
      {results.map((hotel) => (
        <Card
          key={hotel.id}
          sx={{
            width: 320,
            height: 350,
            display: 'flex',
            flexDirection: 'column',
            boxShadow: 3,
            borderRadius: 1,
          }}
        >
          <CardActionArea sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
            <CardMedia
              component="img"
              sx={{ height: 160, width: '100%', objectFit: 'cover' }}
              image={hotel.imageUrl || "https://image-tc.galaxy.tf/wijpeg-b0xml91jb5xeg5ap4wvvhz4jk/exterior-piccadilly-2.jpg?width=1920"}
              alt={hotel.name}
            />
            <CardContent sx={{ flexGrow: 1, width: '100%' }}>
              <h2 style={{ margin: '0 0 8px 0' }}>{hotel.name}</h2>
              <p style={{ fontSize: '15px', margin: 0 }}>{hotel.city}</p>
              <p style={{ margin: 0 }}>{hotel.address}</p>
              <p style={{ margin: 0 }}>Rating: {hotel.hotel_rating} ⭐</p>
            </CardContent>
          </CardActionArea>

          <CardActions sx={{ justifyContent: 'flex-end', px: 2 }}>
            <Button
              size="small"
              sx={{ backgroundColor: "#64c8af", color: "#ffffff" }}
              onClick={() => handleNavigate(hotel.id)}>
              More
            </Button>
          </CardActions>
        </Card>
      ))}
    </>
  );
}
export default ListResult









