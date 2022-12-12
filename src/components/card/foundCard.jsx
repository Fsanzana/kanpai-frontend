import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import MangaCard from "/src/components/card/MangaCard.jsx";

import { ThemeProvider, createTheme } from "@mui/material/styles";

import mangaList from "/src/data/mangaList.json";

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
export default function DescCard() {
  return (
    <ThemeProvider theme={theme}>
      <Card
        sx={{ maxWidth: "100%", background: "#efefef", marginBottom: "5%" }}
      >
        <Grid2
          container
          component="main"
          sx={{ flexGrow: 1, p: 0 }}
          justifyContent="center"
        >
          <CardContent>
            {mangaList.map((data, idx) => (
              <MangaCard
                name={data.name}
                thumbnail={data.img}
                link={data.href}
                desc={data.desc}
              />
            ))}
          </CardContent>
        </Grid2>
      </Card>
    </ThemeProvider>
  );
}
