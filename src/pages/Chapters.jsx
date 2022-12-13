import * as React from "react";
import { useEffect, useState } from "react";

import TimgCard from "/src/components/card/timgCard.jsx";
import ChapterMenu from "../components/menu/chapterMenu";
import DescCard from "../components/card/descCard";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import Load from "../components/loading/load.jsx";
import NotFound from "/src/pages/404";
import Box from "@mui/material/Box";
import { Container, Paper } from "@material-ui/core";
import { getMangabyName } from "../service/MangaService";

function Chapters(props) {
  const { data, isLoading, error } = getMangabyName(props.name);

  if (isLoading) {
    return <Load />;
  }
  if (error) {
    return <NotFound />;
  }

  return (
    <div className="Chapters">
      <Paper
        elevation={3}
        style={{
          position: "absolute",
          width: "100%",
          backgroundColor: "#712222",
          zIndex: "0",
          opacity: "0.9",
          top: "0",
          height: "50vh",
        }}
        square
      >
        <img
          src={data.manBanner}
          style={{
            userSelect: "none",
            objectFit: "cover",
            width: "100%",
            height: "100%",
            left: "0",
            right: "0",
            pointerEvents: "none",
          }}
        />
      </Paper>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 0,
          marginTop: "2%",
          zIndex: "1",
          position: "relative",
        }}
      >
        <Grid2 container justifyContent={"space-around"} key={0}>
          <Grid2 xs="auto">
            <TimgCard
              img={data.manThumbnail}
              state={data.manStatus}
              publication={data.manRealease}
              tags={data.manGenre}
            />
          </Grid2>
          <Grid2 xs="auto" sx={{ width: "70%" }}>
            <Container direction="column">
              <DescCard title={data.manName} desc={data.manSynopsis} />
              <ChapterMenu chapters={data.manChapters} />
            </Container>
          </Grid2>
        </Grid2>
      </Box>
    </div>
  );
}

export default Chapters;
