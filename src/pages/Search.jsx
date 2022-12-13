import * as React from "react";

import SearchCard from "/src/components/card/searchCard.jsx";
import FoundCard from "/src/components/card/foundCard.jsx";
import InputCard from "/src/components/card/inputCard.jsx";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import Box from "@mui/material/Box";
import {
  getAllMangasByName,
  getAllMangasByDem,
  getAllMangasByGenre,
} from "../service/MangaService";
import Load from "../components/loading/load";
import NotFound from "./404";

function Search() {
  var searchFunc;

  switch (window.location.href.split("/")[3]) {
    case "search-g":
      searchFunc = getAllMangasByGenre(window.location.href.split("/")[4]);

      break;
    case "search-d":
      searchFunc = getAllMangasByDem(window.location.href.split("/")[4]);
      break;
    default:
      searchFunc = getAllMangasByName(window.location.href.split("/")[4]);
  }

  const { data, isLoading, error } = searchFunc;

  if (isLoading) {
    return <Load />;
  }
  if (error) {
    return <NotFound />;
  }

  return (
    <div className="Chapters">
      <Box component="main" sx={{ flexGrow: 1, p: 0, marginTop: "2%" }}>
        <Grid2 xs="auto">
          <InputCard />
        </Grid2>
        <Grid2 container justifyContent={"space-around"}>
          <Grid2 xs="auto">
            <SearchCard />
          </Grid2>
          <Grid2 xs="auto" sx={{ width: "70%" }}>
            <FoundCard found={data} />
          </Grid2>
        </Grid2>
      </Box>
    </div>
  );
}

export default Search;
