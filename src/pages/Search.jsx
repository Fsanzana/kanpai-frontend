import * as React from "react";

import SearchCard from "/src/components/card/searchCard.jsx";
import FoundCard from "/src/components/card/foundCard.jsx";
import InputCard from "/src/components/card/inputCard.jsx";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import Box from "@mui/material/Box";

function Search() {
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
            <FoundCard />
          </Grid2>
        </Grid2>
      </Box>
    </div>
  );
}

export default Search;
