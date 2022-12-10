import ResponsiveAppBar from "/src/components/appbar/ResponsiveAppBar.jsx";
import React, { createContext } from "react";
import Card from "/src/components/card/Card.jsx";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Slider from "/src/components/slider/Slider.jsx";

const Title = createContext();

function Layout() {
  return (
    <div className="Layout">
      <ResponsiveAppBar className="appbar" />
      <Slider className="carousel" />
      <Box component="main" sx={{ flexGrow: 1, p: 0 }}>
        <Grid container justifyContent="center">
          {/* <Title.Provider value={"Bocchi prop"}> */}
          {/* <Image.Provider
              value={
                "/src/test/manga/hitoribocchi-no-oo-seikatsu/thumbnail.jpg"
              }
            >
              <Description.Provider value={"prop desc"}> */}
          <Card />
          {/* </Description.Provider>
            </Image.Provider> */}
          {/* </Title.Provider> */}
          {/* <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card /> */}
        </Grid>
      </Box>
    </div>
  );
}

export default Layout;
export { Title };
