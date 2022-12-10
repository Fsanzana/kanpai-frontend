import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { CardActionArea, Tooltip } from "@mui/material";
import { Info, InfoTitle } from "@mui-treasury/components/info";
import { useGalaxyInfoStyles } from "@mui-treasury/styles/info/galaxy";
import { useCoverCardMediaStyles } from "@mui-treasury/styles/cardMedia/cover";

import { Title } from "/src/components/layout/Layout.jsx";

const descripcion =
  "Hitori Bocchi es una joven que sufre de Taijin kyofusho (una variante de fobia social), lo que le impide hablarle a otras personas. Al entrar a la escuela secundaria, su única amiga le dijo que no podrían seguir siendo amigas hasta que Bocchi consiguiera hacerse amiga de todos sus nuevos compañeros de clase.";

const image = "src/assets/bocchi.jpeg";

const useStyles = makeStyles(() => ({
  card: {
    borderRadius: "0.5rem",
    boxShadow: "none",
    position: "relative",
    minWidth: 200,
    minHeight: 300,
    marginTop: "1rem",
    marginBottom: "1rem",
    marginRight: "1rem",
    marginLeft: "1rem",
    border: "0.1px solid #303030",

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

export const MangaCard = React.memo(function GalaxyCard(props) {
  const mediaStyles = useCoverCardMediaStyles({ bgPosition: "top" });
  const styles = useStyles();
  return (
    <Card className={styles.card}>
      <CardActionArea style={{ height: "100%" }} href={props.href}>
        {/* <Tooltip title={descripcion} sx={{ maxWidth: 245 }}> */}
          <CardContent>
            <CardMedia classes={mediaStyles} style={{height: "0", paddingTop: '150%', transform:"scale(1.2)"}} image={props.thumbnail} />
            <Box py={3} px={2} className={styles.content}>
              <Info useStyles={useGalaxyInfoStyles}>
                <InfoTitle
                  style={{
                    marginBottom: "1rem",
                    marginRight: "2rem",
                    fontFamily: "Comic Neue",
                    overflowWrap: "break-word",
                    "&:hover": {
                      transform: "scale(1.5)"
                    }
                  }}
                >{props.name}
                </InfoTitle>
              </Info>
            </Box>
          </CardContent>
        {/* </Tooltip> */}
      </CardActionArea>
    </Card>
  );
});
export default MangaCard;
