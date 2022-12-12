import { Box, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import React from "react";

import RectSelect from "/src/components/editor/rectSelect.jsx";

export default function Editor() {
  return (
    <div className="editor">
      <Paper
        elevation={10}
        sx={{
          padding: "1rem",
          maxWidth: "99%",
          height: "1rem",
          display: "flex",
          flexWrap: "wrap",
          margin: "0.5rem",
        }}
      >
        <Typography variant="headline" component="h3">
          This is the tool bar.
        </Typography>
      </Paper>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        <Paper
          elevation={10}
          sx={{
            padding: "1rem",
            maxWidth: "99%",
            maxHeight: "100%",
            margin: "0.5rem",
          }}
        >
          <Typography variant="headline" component="h3">
            This is the order selector.
          </Typography>
        </Paper>
        <RectSelect />
      </Box>
    </div>
  );
}
