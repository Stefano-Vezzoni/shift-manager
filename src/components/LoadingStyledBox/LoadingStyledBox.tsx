import { Box, CircularProgress } from "@mui/material";

export default function LoadingStyledBox() {
  return (
    <Box
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        zIndex: 9999,
        borderRadius: "inherit",
      }}
    >
      <CircularProgress size={50} />
    </Box>
  );
}
