import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { Grid } from "@mui/material";

import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  overrides: {
    MuiStepIcon: {
      root: {
        "&$completed": {
          color: "#1e1e1e",
        },
        "&$active": {
          color: "#a73030",
        },
      },
      active: {},
      completed: {},
    },
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
  },
});

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: "Bocchi",
    imgPath: "src/assets/boxi.png",
  },
  {
    label: "hitoribocchi",
    imgPath:
      "https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/7cada5d24f7557dfb130523565c073fa.jpeg",
  },
  {
    label: "Bocchi + Bocchi = Bocchi",
    imgPath:
      "https://areajugones.sport.es/wp-content/uploads/2022/10/bocchi-the-rock-gjhjk-1080x609.jpg",
  },
];

function SwipeableTextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Grid container justifyContent="center">
      <Box sx={{ maxWidth: "50rem", flexGrow: 1, align: "center" }}>
        <Paper
          square
          elevation={0}
          sx={{
            display: "flex",
            alignItems: "center",
            height: 50,
            width: "100%",
            pl: 2,
            bgcolor: "#303030",
          }}
        >
          <Typography color="#cacaca" fontFamily="Comic Neue">
            {images[activeStep].label}
          </Typography>
        </Paper>
        <AutoPlaySwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {images.map((step, index) => (
            <div key={step.label}>
              {Math.abs(activeStep - index) <= 2 ? (
                <Box
                  component="img"
                  sx={{
                    height: 300,
                    display: "block",
                    maxHeight: "100%",
                    maxWidth: "100%",
                    overflow: "hidden",
                    width: "100%",
                  }}
                  src={step.imgPath}
                  alt={step.label}
                />
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>
        <ThemeProvider theme={theme}>
          <MobileStepper
            steps={maxSteps}
            position="static"
            activeStep={activeStep}
            sx={{ bgcolor: "#303030" }}
            nextButton={
              <Button
                size="small"
                sx={{ color: "#a73030" }}
                onClick={handleNext}
                disabled={activeStep === maxSteps - 1}
              >
                {theme.direction === "rtl" ? (
                  <KeyboardArrowLeft />
                ) : (
                  <KeyboardArrowRight />
                )}
              </Button>
            }
            backButton={
              <Button
                size="small"
                sx={{ color: "#a73030" }}
                onClick={handleBack}
                disabled={activeStep === 0}
              >
                {theme.direction === "rtl" ? (
                  <KeyboardArrowRight />
                ) : (
                  <KeyboardArrowLeft />
                )}
              </Button>
            }
          />
        </ThemeProvider>
      </Box>
    </Grid>
  );
}

export default SwipeableTextMobileStepper;
