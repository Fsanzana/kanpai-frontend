import { useQuery } from "react-query";

import HttpCommon from "../Http-common";

export const getMangabyName = (name) => {
  return useQuery(["manga", name], async () => {
    const { data } = await HttpCommon.get("manga/" + name);
    return data;
  });
};
export const getAllMangasByName = (name) => {
  return useQuery(["manga", name], async () => {
    const { data } = await HttpCommon.get("search-n/" + name);
    return data;
  });
};

export const getAllMangasByGenre = (name) => {
  return useQuery(["manga", name], async () => {
    const { data } = await HttpCommon.get("search-g/" + name);
    return data;
  });
};

export const getAllMangasByDem = (name) => {
  return useQuery(["manga", name], async () => {
    const { data } = await HttpCommon.get("search-d/" + name);
    return data;
  });
};

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
