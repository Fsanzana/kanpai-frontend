import * as React from "react";
import ListItemText from "@mui/material/ListItemText";
import VignetteRoundedIcon from "@mui/icons-material/VignetteRounded";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import ArrowDropUpRoundedIcon from "@mui/icons-material/ArrowDropUpRounded";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";
import { ListItemIcon, Paper } from "@material-ui/core";
import { ListItem, ToggleButton, Tooltip } from "@mui/material";
import { IconButton } from "@mui/material";

export default function SlideItem(props) {
  const [selected, setSelected] = React.useState(false);
  return (
    <Paper variant="outlined">
      <ListItem
        alignItems="flex-start"
        secondaryAction={
          <IconButton edge="end" aria-label="delete">
            <Tooltip title="Borrar Viñeta">
              <DeleteRoundedIcon />
            </Tooltip>
          </IconButton>
        }
      >
        <ListItemText primary={props.name} sx={{ marginTop: "0.75rem" }} />

        <IconButton
          edge="end"
          aria-label="move-forward"
          sx={{ margin: "0.2rem" }}
        >
          <Tooltip title="Poner Antes">
            <ArrowDropUpRoundedIcon />
          </Tooltip>
        </IconButton>

        <IconButton
          edge="end"
          aria-label="move-backwards"
          sx={{ margin: "0.2rem" }}
        >
          <Tooltip title="Poner Después">
            <ArrowDropDownRoundedIcon />
          </Tooltip>
        </IconButton>

        <ListItemIcon>
          <ToggleButton
            value="selected"
            selected={selected}
            sx={{ borderRadius: "2rem" }}
            color="secondary"
            onChange={() => {
              setSelected(!selected);
            }}
          >
            <Tooltip title="Seleccionar Viñeta">
              <VignetteRoundedIcon />
            </Tooltip>
          </ToggleButton>
        </ListItemIcon>
      </ListItem>
    </Paper>
  );
}
