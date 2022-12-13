import Box from "@mui/material/Box";

function NotFound() {
  return (
    <div>
      <Box sx={{ height: "86.8vh" }}>
        <img
          src="/src/assets/404.png"
          style={{
            resizeMode: "contain",
            maxHeight: "90%",
            maxWidth: "100%",
            display: "flex",
            justifyContent: "center",
            margin: "auto",
            position: "absolute",
            marginBottom: "",
            bottom: "0",
            left: "0",
            right: "0",
          }}
        />
      </Box>
    </div>
  );
}

export default NotFound;
