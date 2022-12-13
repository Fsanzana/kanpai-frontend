import MangaCard from "/src/components/card/MangaCard.jsx";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Slider from "/src/components/slider/Slider.jsx";
import { Outlet } from "react-router-dom";
import mangaList from "/src/data/mangaList.json";
import { getAllMangas } from "../service/CatalogService";

function Home() {
  const {data,isLoading,error} = getAllMangas();

  if (isLoading) {
    return "meme";
  }
  if (error) {
    return "meme2";
  }

  
  return (
    <div className="Home">
      <Slider className="carousel" />
      <Box component="main" sx={{ flexGrow: 1, p: 0 }}>
        <Grid container justifyContent="center">
          {data.map((manga) => (
            <MangaCard
              name={manga.manName}
              thumbnail={manga.manThumbnail}
              link={"manga/"+manga.manName.toLowerCase().replaceAll(" ","-")}
              desc={manga.manSynopsis}
            />
          ))}
        </Grid>
      </Box>
    </div>
  );
}

export default Home;
