import axios from 'axios';
import { useQuery } from 'react-query'; 

const MANGA_API_REST_URL = "http://localhost:8080/";

export const getAllMangas = () => {
    return useQuery("manga", async () => {
        const { data } = await axios.get(MANGA_API_REST_URL);
        return data; 
  })
}
