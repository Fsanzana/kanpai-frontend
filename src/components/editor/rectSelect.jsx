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

  // this.state.LA WEA

  render() {
    return (
      <RectangleSelection
        onSelect={(e, coords) => {
          this.setState({
            origin: coords.origin,
            target: coords.target,
          });
        }}
        style={{
          backgroundColor: "rgba(118,128,181,0.4)",
          borderColor: "blue",
        }}
      >
        <Paper
          sx={{
            margin: "0.5rem",
            padding: "1rem",
            maxWidth: "100%",
            maxHeight: "100%",
          }}
        >
          <img
            src="/src/assets/boxi.png"
            style={{
              userSelect: "none",
              resizeMode: "contain",
              maxHeight: "36.9rem",
              maxWidth: "100%",
              pointerEvents: "none",
            }}
          />
          <Typography variant="headline" component="h3"></Typography>
        </Paper>
      </RectangleSelection>
    );
  }
}
