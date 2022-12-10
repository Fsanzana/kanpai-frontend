import Card from "/src/components/card/Card.jsx";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Slider from "/src/components/slider/Slider.jsx";
import {Outlet} from "react-router-dom";
import mangaList from "/src/data/mangaList.json"

function Home() {
  return (
    <div className="Layout">
      <Slider className="carousel" />
      <Box component="main" sx={{ flexGrow: 1, p: 0 }}>
        <Grid container justifyContent="center">
        {mangaList.map((data, idx) => (
            <Card name={data.name} thumbnail={data.route}/>
        ))}
        </Grid>
      </Box>
    </div>
  );
}

export default Home;
