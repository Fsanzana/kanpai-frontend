import React from "react";
import { AppBar, Toolbar, Typography, Grid, Link } from "@material-ui/core";
import { Box, Button } from "@mui/material";
const handleClick = () => {
  window.location.pathname = "/publisher-editor"
}
const Footer = () => (
  <Box
    sx={{
      display: "flex",
      position: "relative",
      marginTop: "2rem",
      bottom: "0",
      right: "0",
      left: "0",
    }}
  >
    <AppBar position="static" elevation={0} component="footer" color="default">
      <Toolbar style={{ justifyContent: "space-between" }}>
        <Typography variant="caption">
          © 2022 Kanpai Company. Ningun derecho reservado.
        </Typography>
        <Button variant="contained" color="secondary" sx={{ margin: "1rem" }} onClick={handleClick}>
          Publica con Nosotros
        </Button>
      </Toolbar>
    </AppBar>
  </Box>
);

export default Footer;
