import * as React from "react";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import Typography from "@mui/material/Typography";
import ContentCut from "@mui/icons-material/ContentCut";
import ContentCopy from "@mui/icons-material/ContentCopy";
import ContentPaste from "@mui/icons-material/ContentPaste";
import Grid from "@mui/system/Unstable_Grid/Grid";
import Cloud from "@mui/icons-material/Cloud";
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
export default function ChapterMenu(props) {
  const cap = "Capitulo ";
  return (
    <ThemeProvider theme={theme}>
      <Paper
        sx={{
          maxWidth: "100%",
          maxHeight: "40rem",
          background: "#efefef",
          marginBottom: "5%",
        }}
      >
        <MenuList>
          {props.chapters.map((chapter) => (
            <a
              href={
                "/src/components/reader/mangareader.html#" + chapter.chaPath
              }
            >
              <MenuItem>
                <Grid
                  container
                  direction="row"
                  justifyContent="space-between"
                  sx={{ width: "100%" }}
                >
                  <Typography textAlign="center" color="black">
                    {cap + chapter.chaNum}
                  </Typography>
                  <Typography textAlign="center" color="black">
                    {chapter.chaName}
                  </Typography>
                </Grid>
              </MenuItem>
            </a>
          ))}
        </MenuList>
      </Paper>
    </ThemeProvider>
  );
}