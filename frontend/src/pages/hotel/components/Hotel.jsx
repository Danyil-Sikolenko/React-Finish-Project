import { useLoaderData, useNavigate } from 'react-router';
import HotelDetail from "./HotelDetail";

function Hotel() {
    const navigate = useNavigate()
    const data = useLoaderData()
    
    return (
        <>
        <HotelDetail data={data} onBack={() => navigate(-1)} />
        </>
    );
}

export default Hotel;
