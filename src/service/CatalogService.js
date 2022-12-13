import { useQuery } from 'react-query'; 

import HttpCommon from '../Http-common';

export const getAllMangas = () => {
    return useQuery("manga", async () => {
        const { data } = await HttpCommon.get("");
        return data; 
  })
}
