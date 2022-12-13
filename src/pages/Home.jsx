import MangaCard from "/src/components/card/MangaCard.jsx";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Slider from "/src/components/slider/Slider.jsx";
import { getAllMangas } from "../service/CatalogService";
import Load from "../components/loading/load";
import NotFound from "./404";

function Home() {
  const { data, isLoading, error } = getAllMangas();

  if (isLoading) {
    return <Load />;
  }
  if (error) {
    return <NotFound />;
  }

  return (
    <div className="Home">
      <Slider className="carousel" />
      <Box component="main" sx={{ flexGrow: 1, p: 0 }}>
        <Grid container justifyContent="center">
          {data.map((manga, key) => (
            <MangaCard
              key={key}
              name={manga.manName}
              thumbnail={manga.manThumbnail}
              link={"manga/" + manga.manName.toLowerCase().replaceAll(" ", "-")}
              desc={manga.manSynopsis}
            />
          ))}
        </Grid>
      </Box>
    </div>
  );
}

export default Home;
