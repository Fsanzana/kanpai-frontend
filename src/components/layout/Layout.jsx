import ResponsiveAppBar from '/src/components/appbar/ResponsiveAppBar.jsx'
import Card from '/src/components/card/Card.jsx'
import PermanentDrawerLeft from '/src/components/drawer/Drawer.jsx'
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';

function Layout() {

  return (
    <div className="Layout">
      
      <ResponsiveAppBar className="appbar"/>
      <PermanentDrawerLeft id="drawer"/>
      <Box component="main" sx={{ flexGrow: 1, p: 0 }}>
        <Toolbar />
        <Grid container justifyContent="center">
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </Grid>
        
      </Box>
      
        
    </div>
  )
}

export default Layout
