import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

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
export default function DescCard(props) {
  return (
    <ThemeProvider theme={theme}>
      <Card
        sx={{ maxWidth: "100%", background: "#efefef", marginBottom: "5%" }}
      >
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.desc}
          </Typography>
        </CardContent>
      </Card>
    </ThemeProvider>
  );
}
