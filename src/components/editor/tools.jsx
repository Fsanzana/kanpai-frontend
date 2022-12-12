import * as React from "react";
import { styled } from "@mui/material/styles";

import UndoRoundedIcon from "@mui/icons-material/UndoRounded";
import RedoRoundedIcon from "@mui/icons-material/RedoRounded";
import UploadFileRoundedIcon from "@mui/icons-material/UploadFileRounded";
import DeleteWarning from "./deleteWarning.jsx";

import HighlightAltRoundedIcon from "@mui/icons-material/HighlightAltRounded";
import OpenWithRoundedIcon from "@mui/icons-material/OpenWithRounded";
import DeselectRoundedIcon from "@mui/icons-material/DeselectRounded";
import EditRoundedIcon from "@mui/icons-material/EditRounded";

import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { IconButton, Tooltip } from "@mui/material";
import { Stack } from "@mui/system";

import SaveButton from "/src/components/editor/saveButton.jsx";

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  "& .MuiToggleButtonGroup-grouped": {
    margin: theme.spacing(0.5),
    border: 0,
    "&.Mui-disabled": {
      border: 0,
    },
    "&:not(:first-of-type)": {
      borderRadius: theme.shape.borderRadius,
    },
    "&:first-of-type": {
      borderRadius: theme.shape.borderRadius,
    },
  },
}));

export default function CustomizedDividers() {
  const [alignment, setAlignment] = React.useState("left");

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
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
          paddingLeft: "0.5rem",
          paddingRight: "0.5rem",
          borderRadius: "2rem",
        }}
      >
        <Stack direction="row" alignItems="center" spacing={0}>
          <Tooltip title="Guardar Cambios">
            <IconButton variant="contained" component="label">
              <SaveButton />
            </IconButton>
          </Tooltip>
          <Tooltip title="Deshacer">
            <IconButton variant="contained" component="label">
              <UndoRoundedIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Rehacer">
            <IconButton variant="contained" component="label">
              <RedoRoundedIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Subir Archivo">
            <IconButton variant="contained" component="label">
              <UploadFileRoundedIcon />
              <input hidden accept="image/*" multiple type="file" />
            </IconButton>
          </Tooltip>
          <Divider flexItem orientation="vertical" sx={{ mx: 0.5, my: 1 }} />
          <Tooltip title="Borrar Página">
            <IconButton variant="contained" component="label">
              <DeleteWarning />
            </IconButton>
          </Tooltip>
        </Stack>
        <Divider flexItem orientation="vertical" sx={{ mx: 0.5, my: 1 }} />
        <StyledToggleButtonGroup
          size="small"
          value={alignment}
          exclusive
          onChange={handleAlignment}
          aria-label="text alignment"
        >
          <ToggleButton value="rectSelect" aria-label="Make a Selection">
            <Tooltip title="Hacer Selección">
              <HighlightAltRoundedIcon />
            </Tooltip>
          </ToggleButton>

          <ToggleButton value="justify" aria-label="justified">
            <Tooltip title="Editar Selección">
              <EditRoundedIcon />
            </Tooltip>
          </ToggleButton>

          <ToggleButton value="moveSelect" aria-label="Move">
            <Tooltip title="Mover Selección">
              <OpenWithRoundedIcon />
            </Tooltip>
          </ToggleButton>
        </StyledToggleButtonGroup>
        <IconButton variant="contained" component="label">
          <Tooltip title="Borrar Selección">
            <DeselectRoundedIcon />
          </Tooltip>
        </IconButton>
      </Paper>
    </div>
  );
}
