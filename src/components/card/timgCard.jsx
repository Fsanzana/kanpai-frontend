import * as React from "react";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
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

export default function TimgCard(props) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  return (
    <ThemeProvider theme={theme}>
      <Card sx={{ maxWidth: 345, marginBottom: "5%" }}>
        <CardMedia
          component="img"
          height="500rem"
          image={props.img}
          alt="akira"
        />

        <CardActions sx={{ padding: 0 }}>
          <MenuList>
            <MenuItem>
              <Grid
                container
                direction="row"
                justifyContent="space-between"
                sx={{ width: "19.5rem" }}
              >
                <Typography textAlign="center" color="#cacaca">
                  Estado
                </Typography>
                <Chip label={props.state} color="success" />
              </Grid>
            </MenuItem>
            <MenuItem>
              <Grid
                container
                direction="row"
                justifyContent="space-between"
                sx={{ width: "19.5rem" }}
              >
                <Typography textAlign="center" color="#cacaca">
                  Publicacion
                </Typography>
                <Chip label={props.publication} color="primary" />
              </Grid>
            </MenuItem>
            <MenuItem>
              <Grid container direction="row" sx={{ width: "19.5rem" }}>
                {props.tags.map((labels) => (
                  <Chip
                    label={labels}
                    sx={{
                      color: "black",
                      background: "#cacaca",
                      marginRight: "2%",
                      marginBottom: "2%",
                    }}
                  />
                ))}
              </Grid>
            </MenuItem>
          </MenuList>
        </CardActions>
      </Card>
    </ThemeProvider>
  );
}
