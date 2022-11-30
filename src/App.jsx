import './App.css'
import ResponsiveAppBar from './components/appbar/ResponsiveAppBar.jsx'
import Card from './components/card/Card.jsx'
import Grid from '@mui/material/Grid';

function App() {

  return (
    <div className="App">
      <ResponsiveAppBar className="appbar"/>
      <Grid className='mangas' container justifyContent="center">
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
      
    </div>
  )
}

export default App
