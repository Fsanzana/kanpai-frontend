import * as React from "react";
import { useEffect, useState } from "react";

import TimgCard from "/src/components/card/timgCard.jsx";
import ChapterMenu from "../components/menu/chapterMenu";
import DescCard from "../components/card/descCard";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import Box from "@mui/material/Box";
import { Container, Paper } from "@material-ui/core";
function Chapters(props) {
  const file = "/src/assets" + props.name + "/chapters.json";
  const [data, setData] = useState([]);
  const fetchData = () => {
    fetch(file)
      .then((response) => response.json())
      .then((actualData) => {
        setData(actualData);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);
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
        {data?.map((item, index) => (
          <img
            src={item.banner}
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
        ))}
      </Paper>

      <Box
        component="main"
        sx={{
          position: "relative",
          zIndex: "1",
          flexGrow: 1,
          p: 0,
          marginTop: "2%",
        }}
      >
        {data?.map((item, index) => (
          <Grid2 container justifyContent={"space-around"} key={index}>
            <Grid2 xs="auto">
              <TimgCard
                img={item.img}
                state={item.state}
                publication={item.publication}
                tags={item.tags}
              />
            </Grid2>
            <Grid2 xs="auto" sx={{ width: "70%" }}>
              <Container direction="column">
                <DescCard title={item.title} desc={item.desc} />
                <ChapterMenu
                  chapters={item.chapters}
                  name={props.name.replace("/", "").replace("manga", "")}
                />
              </Container>
            </Grid2>
          </Grid2>
        ))}
      </Box>
    </div>
  );
}

export default Chapters;
