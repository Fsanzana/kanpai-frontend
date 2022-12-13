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
  "ACCION",
  "ARTES MARCIALES",
  "AVENTURA",
  "CIENCIA FICCION",
  "COMEDIA",
  "CRIMEN",
  "DEMONIOS",
  "DEPORTE",
  "DRAMA",
  "FAMILIA",
  "FANTASIA",
  "GORE",
  "GUERRA",
  "HISTORIA",
  "HORROR",
  "MAGIA",
  "MECHA",
  "MISTERIO",
  "POLICIACO",
  "PSICOLOGICO",
  "RECUENTOS DE LA VIDA",
  "ROMANCE",
  "SAMURAI",
  "SUPERNATURAL",
  "SUPERVIVENCIA",
  "THRILLER",
  "TRAGEDIA",
  "VIDA ESCOLAR",
];

export default function DescCard() {
  const handleTagClick = (name) => {
    var aux = "/search-g/" + name.replaceAll(" ", "_").toUpperCase();
    location.assign(aux);
  };

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
                onClick={() => handleTagClick(labels)}
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
