import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import Input from "/src/components/searchInput/BigInput.jsx";

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
export default function DescCard() {
  return (
    <ThemeProvider theme={theme}>
      <Card
        sx={{
          maxWidth: "100%",
          background: "#efefef",
          marginBottom: "5%",
          marginLeft: "2%",
          marginRight: "2%",
        }}
      >
        <CardContent
          component="main"
          sx={{
            flexGrow: 1,
            p: 2.5,
          }}
        >
          <Input />
        </CardContent>
      </Card>
    </ThemeProvider>
  );
}
