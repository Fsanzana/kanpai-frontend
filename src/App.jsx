import './App.css'
import ResponsiveAppBar from './components/appbar/ResponsiveAppBar.jsx'
import Card from './components/card/Card.jsx'
import PermanentDrawerLeft from './components/drawer/Drawer.jsx'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

function App() {

  return (
    <div className="App">
      <ResponsiveAppBar className="appbar"/>

      <Grid>     
        <Grid container justifyContent="center" className="mangas"  >
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
        <PermanentDrawerLeft id="drawer"/>

      </Grid>
      
    </div>
  )
}

export default App
