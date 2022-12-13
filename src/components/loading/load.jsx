import { CircularProgress } from "@mui/material";
import { Box } from "@mui/system";

export default function Load() {
  return (
    <Box
      style={{
        flex: 1,
        height: "90vh",

        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CircularProgress color="secondary" size={40} thickness={40} />
    </Box>
  );
}
