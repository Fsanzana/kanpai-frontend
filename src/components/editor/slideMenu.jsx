import * as React from "react";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";

import SlideItem from "/src/components/editor/slideItem.jsx";
import { Box } from "@mui/material";

const slides = ["1", "2", "3", "4", "5"];

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
      {slides.map((data, idx) => (
        <SlideItem name={data} id={idx} />
      ))}
    </List>
  );
}
