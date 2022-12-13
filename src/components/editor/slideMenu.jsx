import * as React from "react";
import List from "@mui/material/List";

import SlideItem from "/src/components/editor/slideItem.jsx";

const slides = ["1", "2", "3", "4", "5"];

//reorder shit do function ñe
const goUp = (name) => {
  console.log(slides.indexOf(name));
  const aux = slides.indexOf(name);
};

const goDown = (name) => {
  console.log(name);
};

export default function AlignItemsList() {
  return (
    <List
      sx={{
        overflow: "auto",
        width: "100%",
        marginTop: "0.5rem",
        maxHeight: "34rem",
        maxWidth: 360,
        bgcolor: "background.paper",
      }}
    >
      {slides.map((data, key) => (
        <SlideItem name={data} key={key} goUp={goUp} goDown={goDown} />
      ))}
    </List>
  );
}
