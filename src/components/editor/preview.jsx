import * as React from "react";
import Dialog from "@mui/material/Dialog";
import PreviewRoundedIcon from "@mui/icons-material/PreviewRounded";
import Divider from "@mui/material/Divider";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Stack } from "@mui/system";
import { IconButton, Paper, Tooltip } from "@mui/material";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";

import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Paper
        elevation={1}
        sx={{
          display: "flex",
          border: (theme) => `1px solid ${theme.palette.divider}`,
          flexWrap: "wrap",
          backgroundColor: "#a73030",
          borderRadius: "2rem",
        }}
      >
        <Stack direction="row" alignItems="center" spacing={0}>
          <Tooltip title="Vista Previa" sx={{ margin: "3px" }}>
            <IconButton
              variant="contained"
              component="label"
              onClick={handleClickOpen}
            >
              <PreviewRoundedIcon />
            </IconButton>
          </Tooltip>
        </Stack>
      </Paper>

      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative", background: "#a73030" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Vista Previa
            </Typography>
          </Toolbar>
        </AppBar>

        {/* PUT READER WITH CURRENT DATA HERE */}
        <List>
          <ListItem>
            <ListItemText primary="Phone ringtone" secondary="Titania" />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText
              primary="Default notification ringtone"
              secondary="Tethys"
            />
          </ListItem>
        </List>
        {/* PUT READER WITH CURRENT DATA HERE */}
      </Dialog>
    </div>
  );
}
