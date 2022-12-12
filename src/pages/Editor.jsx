import {
  Box,
  Divider,
  Grid,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import React from "react";
import Pagination from "@mui/material/Pagination";

import RectSelect from "/src/components/editor/rectSelect.jsx";
import Tools from "/src/components/editor/tools.jsx";
import Preview from "/src/components/editor/preview.jsx";
import SlideMenu from "/src/components/editor/slideMenu.jsx";

export default function Editor() {
  return (
    <div className="editor">
      <Paper
        elevation={10}
        sx={{
          padding: "1rem",
          maxWidth: "99%",
          height: "100%",
          display: "flex",
          flexWrap: "wrap",
          margin: "0.5rem",
        }}
      >
        <Grid container justifyContent={"space-between"}>
          <Tools />
          <Tooltip title="Página">
            <Pagination count={10} sx={{ margin: "0.5rem" }} />
          </Tooltip>
          <TextField
            id="chapter-name"
            label="Titulo del Capítulo"
            variant="standard"
          />
          <TextField
            id="manga-name"
            label="Titulo del Manga"
            variant="standard"
            disabled
          />
          <Preview />
        </Grid>
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
          <Typography
            variant="headline"
            component="h3"
            sx={{ margin: "0.2rem" }}
          >
            Orden de Paneles (Viñetas)
          </Typography>
          <SlideMenu />
        </Paper>
        <RectSelect />
      </Box>
    </div>
  );
}
