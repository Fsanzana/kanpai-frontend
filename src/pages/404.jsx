import MangaCard from "/src/components/card/MangaCard.jsx";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Slider from "/src/components/slider/Slider.jsx";
import { Outlet } from "react-router-dom";
import mangaList from "/src/data/mangaList.json";
function NotFound() {
  return (
    <Box>
      <img
        src="/src/assets/404.png"
        style={{
          resizeMode: "contain",
          maxHeight: "90%",
          maxWidth: "100%",
          display: "flex",
          justifyContent: "center",
          margin: "auto",
          position: "absolute",
          bottom: "0",
          left: "0",
          right: "0",
        }}
      />
    </Box>
  );
}

export default NotFound;
