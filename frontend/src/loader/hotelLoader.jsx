import { API_PATHS } from "../services/api/index";


  export async function HotelLoader({ params }) {
    try {
        const response = await fetch(`${API_PATHS.DATA_HOTELS}/${params.id}`);

        if (!response.ok) {
            throw new Error(`Error ${response.status}: ${response.statusText}`);
        }

        return await response.json();
    } catch (error) {
        console.error("An error has occurred:", error)
        return null; 

    }
}

