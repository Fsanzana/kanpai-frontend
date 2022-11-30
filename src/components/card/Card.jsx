import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Tooltip, Box } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
  
const theme = createTheme ( {
  palette: {
    primary: {
      main: '#a73030',
    },
    secondary: {
      main: '#6c00b3',
    },
    background: {
      default: '#1e1e1e',
      paper: '#161313',
    },
  },
  typography: {
    fontFamily: 'Comic Neue',
    fontWeightMedium: 600,
  },
});

export default function MultiActionAreaCard() {
const descripcion =  "Hitori Bocchi es una joven que sufre de Taijin kyofusho (una variante de fobia social), lo que le impide hablarle a otras personas. Al entrar a la escuela secundaria, su única amiga le dijo que no podrían seguir siendo amigas hasta que Bocchi consiguiera hacerse amiga de todos sus nuevos compañeros de clase."
const descTrunc = descripcion.substring(0,120)+"..."
  return (
    <ThemeProvider theme={theme}>
    <Box sx={{ display: "inline-block" , marginRight: "1rem"}}>
    <Card sx={{ width: 245 , height: 395, display: "inline-block"}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image="src\assets\bocchi.jpeg"
          alt="Hitori Bocchi"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" color="#b63333">
            Bocchi
          </Typography>
          <Tooltip title={descripcion} sx={{maxWidth:245}}>
            <Typography variant="body2" color="white">
                {descTrunc}
            </Typography>
          </Tooltip>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Añadir a biblioteca
        </Button>
      </CardActions>
    </Card>
    </Box>
    </ThemeProvider>
  );
}