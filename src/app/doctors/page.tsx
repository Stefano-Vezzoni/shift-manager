import Navbar from "@/components/Navbar/Navbar";
import { Box, Divider } from "@mui/material";

export default function Doctors() {
  return (
    <Box display="flex" minHeight="100vh">
      <Navbar />
      <Divider orientation="vertical" flexItem />
      <Box component="main" flexGrow={1} p={3}></Box>
    </Box>
  );
}
