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
import { ConnectingAirportsOutlined } from "@mui/icons-material";

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

  const handleTagClick = (name) => {
    // PONER AQUI REDIRECT A BUSQUEDA POR GENERO
    console.log("to " + name);
  };

  const handleDemoClick = (name) => {
    // PONER AQUI REDIRECT A BUSQUEDA POR DEMOGRAFÍA
    console.log("to " + name);
  };

  const handleDemoColor = (name) => {
    switch (name) {
      case "Shounen":
        return "primary";

      case "Seinen":
        return "info";

      case "Shoujo":
        return "success";

      case "Josei":
        return "secondary";

      case "Kodomo":
        return "warning";
    }
  };

  const handleStateColor = (name) => {
    switch (name) {
      case "Finish":
        return "success";

      case "Emission":
        return "secondary";

      case "Hiatus":
        return "warning";
    }
  };

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
                <Chip
                  color={handleStateColor(props.state)}
                  label={props.state}
                />
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
                  Publicación
                </Typography>
                <Chip label={props.publication} color="warning" />
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
                  Demografía
                </Typography>
                <Button
                  variant="contained"
                  color={handleDemoColor(props.demo)}
                  sx={{
                    borderRadius: "2rem",
                    padding: "0.2rem",
                    paddingRight: "0.7rem",
                    paddingLeft: "0.7rem",
                  }}
                  onClick={() => handleDemoClick(props.demo)}
                >
                  {props.demo}
                </Button>
              </Grid>
            </MenuItem>
            <Typography textAlign="center" color="#cacaca">
              Géneros
            </Typography>
            <MenuItem>
              <Grid container direction="row" sx={{ width: "19.5rem" }}>
                {props.tags.map((labels, key) => (
                  <Chip
                    key={key}
                    onClick={() => handleTagClick(labels)}
                    label={labels.replaceAll("_", " ")}
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
