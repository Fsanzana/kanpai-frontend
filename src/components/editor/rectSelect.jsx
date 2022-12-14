import { Paper, Typography } from "@mui/material";
import React from "react";

import RectangleSelection from "react-rectangle-selection";

export default class ReactRectangleSelection extends React.Component {
  constructor(props) {
    super(props);
    this.animationInProgress = null;
    this.state = {
      hold: false,
      selectionBox: false,
      selectionBoxOrigin: [0, 0],
      selectionBoxTarget: [0, 0],
      origin: [0, 0],
      target: [0, 0],
      animation: "",
    };
  }

  render() {
    var rects = [];
    function newRect(origin, target, index) {
      var x;
      var y;

      if (origin[0] < target[0]) {
        x = origin[0];
      } else x = target[0];

      x += Math.abs((origin[0] - target[0]) / 2);

      if (origin[1] < target[1]) {
        y = origin[1];
      } else y = target[1];

      y += Math.abs((origin[1] - target[1]) / 2);

      console.log(
        "X " +
          x +
          " | Y " +
          y +
          " | WIDTH " +
          Math.abs(origin[0] - target[0]) +
          " | HEIGHT " +
          Math.abs(origin[1] - target[1])
      );

      rects[index] = (
        <Paper
          style={{
            left: x,
            top: y,
            width: Math.abs(origin[0] - target[0]),
            height: Math.abs(origin[1] - target[1]),
          }}
          variant="outlined"
          square
        ></Paper>
      );
    }
    return (
      <Paper
        sx={{
          overflow: "auto",
          margin: "0.5rem",
          padding: "1rem",
          width: "75.6vw",
          height: "79vh",

          background: "#cacaca",
        }}
      >
        {rects.map(() => (
          <>{rects}</>
        ))}
        <RectangleSelection
          onSelect={(e, coords) => {
            this.setState({
              origin: coords.origin,
              target: coords.target,
              rects: newRect(coords.origin, coords.target, rects.length),
            });
          }}
          style={{
            backgroundColor: "rgba(118,128,181,0.4)",
            borderColor: "blue",
          }}
        >
          <img
            src="/src/assets/manga/berserk/1/10.jpg"
            style={{
              userSelect: "none",
              resizeMode: "contain",
              height: "100%",
              pointerEvents: "none",
            }}
          />
        </RectangleSelection>
      </Paper>
    );
  }
}
