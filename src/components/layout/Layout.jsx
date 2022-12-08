import ResponsiveAppBar from "/src/components/appbar/ResponsiveAppBar.jsx";
import Card from "/src/components/card/Card.jsx";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

function Layout() {
  return (
    <div className="Layout">
      <ResponsiveAppBar className="appbar" />
      <Box component="main" sx={{ flexGrow: 1, p: 0 }}>
        <Grid container justifyContent="center">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Grid>
      </Box>
    </div>
  );
}

export default Layout;
