import { Box } from "@mui/material";
import Paper from "@mui/material/Paper";
import React from "react";

import RectSelect from "/src/components/editor/rectSelect.jsx";

import Footer from "../components/footer/Footer";

export default function Editor() {
  return (
    <div className="editor">
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,
            width: "19vh",
            height: "19vh",
          },
        }}
      >
        <Paper elevation={24} sx={{ color: "secondary" }}>
          <Typography variant="headline" component="h3">
            This is a sheet of paper.
          </Typography>
        </Paper>
        {/* <Footer /> */}
      </Box>
    </div>
  );
}
