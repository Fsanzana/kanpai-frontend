import './App.css'
import ResponsiveAppBar from './components/appbar/ResponsiveAppBar.jsx'
import Card from './components/card/Card.jsx'
import Box from '@mui/material/Box';

function App() {

  return (
    <div className="App">
      <ResponsiveAppBar className="appbar"/>
      <Box className='mangas'>
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
      
      </Box>
      
    </div>
  )
}

export default App
