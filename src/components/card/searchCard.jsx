import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import DemSelect from "../searchInput/DemSelect";
import { Grid } from "@mui/material";
import Chip from "@mui/material/Chip";

const theme = createTheme({
  palette: {
    primary: {
      main: "#a73030",
    },
    secondary: {
      main: "#6c00b3",
    },
    background: {
      default: "#1e1e1e",
      paper: "#161313",
    },
  },
  typography: {
    fontFamily: "Comic Neue",
    fontWeightMedium: 600,
  },
});

const tags = [
  "Aventura",
  "Comedia",
  "Drama",
  "Supernatural",
  "Magia",
  "Recuentos de la vida",
  "Guerra",
  "Romance",
  "Vida Escolar",
  "Gore",
  "Psicologico",
  "Tragedia",
];

export default function DescCard() {
  return (
    <ThemeProvider theme={theme}>
      <Card
        sx={{ maxWidth: "100%", background: "#efefef", marginBottom: "5%" }}
      >
        <CardContent>
          <DemSelect />
          <Grid container direction="row" sx={{ width: "15rem" }}>
            {tags.map((labels, key) => (
              <Chip
                key={key}
                label={labels}
                sx={{
                  color: "black",
                  background: "#cacaca",
                  marginRight: "2%",
                  marginTop: "2%",
                }}
              />
            ))}
          </Grid>
        </CardContent>
      </Card>
    </ThemeProvider>
  );
}
