import * as React from "react";
import List from "@mui/material/List";

import SlideItem from "/src/components/editor/slideItem.jsx";
import { Button } from "@mui/material";

export default function AlignItemsList() {
  const [slides, setSlides] = React.useState([]);

  function goUp(name) {
    console.log(name);
  }

  function goDown(name) {
    console.log(slides.indexOf(name));
  }

  function deleteSlide(name) {
    setSlides(slides.filter((item) => item.name !== name));
  }

  function selectSlide(name) {
    console.log(slides);
    slides.sort;
    console.log("slide " + name + " selected");
  }

  function pushSlide(name) {
    //setSlides((prevState) => [...prevState, newSlide(name)]);
    setSlides((prevState) => [...prevState, newSlide(name)]);
  }

  function newSlide(name) {
    return (
      <SlideItem
        name={name}
        key={SlideItem.key}
        goUp={goUp}
        goDown={goDown}
        deleteSlide={deleteSlide}
        selectSlide={selectSlide}
      />
    );
  }

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
      <Button onClick={() => pushSlide(slides.length + 1)}>+</Button>
      {slides.map(() => (
        <>{slides}</>
      ))}
    </List>
  );
}
