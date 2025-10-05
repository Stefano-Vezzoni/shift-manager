import Navbar from "@/components/Navbar/Navbar";
import { Box } from "@mui/material";

export default function Doctors() {
  return (
    <Box display="flex" minHeight="100vh">
      <Navbar />
      <Box component="main" flexGrow={1} bgcolor="grey.600" p={3}></Box>
    </Box>
  );
}
