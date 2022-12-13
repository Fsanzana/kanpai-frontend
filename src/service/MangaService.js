import axios from 'axios';
import { useQuery } from 'react-query'; 

const MANGA_API_REST_URL = "http://localhost:8080/manga/";


export const getMangabyName = (name) => {
    return useQuery(["manga",name], async () => {
        const { data } = await axios.get(MANGA_API_REST_URL+name);
        return data; 
  })
}

// export const useGetMangaById = (id) => {
//     return useQuery(["manga", id], async () => {
//         const { data } = await axios.get(MANGA_API_REST_URL+id);
//         return data; 
//   })
// }
// export const getAllMangas = () => {
//     return useQuery("mangas",async () => {
//         const { data } = await axios.get(MANGA_API_REST_URL);
//         return data; 
//   })
// }