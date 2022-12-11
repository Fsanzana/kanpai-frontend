import * as React from "react";
import { useEffect, useState } from "react";

import TimgCard from "/src/components/card/timgCard.jsx";
import ChapterMenu from "../components/menu/chapterMenu";
import DescCard from "../components/card/descCard";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import Box from "@mui/material/Box";
import { Paper, Typography, Container } from "@material-ui/core";
function Chapters(props) {
  const file = "/src/test" + props.name + "/chapters.json";
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
      <Box component="main" sx={{ flexGrow: 1, p: 0, marginTop: "2%" }}>
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
