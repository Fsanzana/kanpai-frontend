import React from "react";
import NoSsr from "@material-ui/core/NoSsr";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { CardActionArea, CardActions, Tooltip } from "@mui/material";
import { Info, InfoSubtitle, InfoTitle } from "@mui-treasury/components/info";
import { useGalaxyInfoStyles } from "@mui-treasury/styles/info/galaxy";
import { useCoverCardMediaStyles } from "@mui-treasury/styles/cardMedia/cover";

const descripcion =
  "Hitori Bocchi es una joven que sufre de Taijin kyofusho (una variante de fobia social), lo que le impide hablarle a otras personas. Al entrar a la escuela secundaria, su única amiga le dijo que no podrían seguir siendo amigas hasta que Bocchi consiguiera hacerse amiga de todos sus nuevos compañeros de clase.";

const useStyles = makeStyles(() => ({
  card: {
    borderRadius: "0.5rem",
    boxShadow: "none",
    position: "relative",
    minWidth: 190,
    minHeight: 285,
    marginTop: "0.5rem",
    marginBottom: "0.5rem",
    marginRight: "0.5rem",
    marginLeft: "0.5rem",

    "&:after": {
      content: '""',
      display: "block",
      position: "absolute",
      width: "100%",
      height: "64%",
      bottom: 0,
      zIndex: 1,
      background: "linear-gradient(to top, #000, rgba(0,0,0,0))",
    },
  },
  content: {
    position: "absolute",
    zIndex: 2,
    bottom: 0,
    width: "100%",
  },
}));

export const MangaCard = React.memo(function GalaxyCard() {
  const mediaStyles = useCoverCardMediaStyles({ bgPosition: "top" });
  const styles = useStyles();
  return (
    <Card className={styles.card}>
      <CardActionArea style={{ height: "100%" }}>
        <Tooltip title={descripcion} sx={{ maxWidth: 245 }}>
          <CardContent>
            <CardMedia classes={mediaStyles} image={"src/assets/bocchi.jpeg"} />
            <Box py={3} px={2} className={styles.content}>
              <Info useStyles={useGalaxyInfoStyles}>
                <InfoTitle
                  style={{
                    marginBottom: "1rem",
                    marginRight: "2rem",
                    fontFamily: "Comic Neue",
                    overflowWrap: "break-word",
                  }}
                >
                  Bocchi
                </InfoTitle>
              </Info>
            </Box>
          </CardContent>
        </Tooltip>
      </CardActionArea>
    </Card>
  );
});
export default MangaCard;
