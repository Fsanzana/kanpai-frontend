import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { borderRadius, height } from "@mui/system";

export default function DemSelect() {
  const [dem, setDem] = React.useState("");

  const handleChange = (event) => {
    setDem(event.target.value);
    location.assign(
      "/search-d/" + event.target.value.replaceAll(" ", "_").toUpperCase()
    );
  };

  const names = ["Seinen", "Shoujo", "Shounen", "Josei", "Kodomo"];

  return (
    <Box sx={{ minWidth: 130 }}>
      <FormControl fullWidth height="21rem">
        <InputLabel id="demo-simple-select-label">Demografía</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={dem}
          label="dem"
          onChange={handleChange}
          sx={{
            background: "#cacaca",
          }}
        >
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              sx={{
                color: "#cacaca",
                background: "#1e1e1e",
                marginRight: "2%",
                marginBottom: "2%",
              }}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
