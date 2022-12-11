import MangaCard from "/src/components/card/MangaCard.jsx";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Slider from "/src/components/slider/Slider.jsx";
import { Outlet } from "react-router-dom";
import mangaList from "/src/data/mangaList.json";
function Home() {
  return (
    <div className="Home">
      <Slider className="carousel" />
      <Box component="main" sx={{ flexGrow: 1, p: 0 }}>
        <Grid container justifyContent="center">
          {mangaList.map((data, idx) => (
            <MangaCard
              name={data.name}
              thumbnail={data.img}
              link={data.href}
              desc={data.desc}
            />
          ))}
        </Grid>
      </Box>
    </div>
  );
}

export default Home;
