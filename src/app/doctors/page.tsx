import Navbar from "@/components/Navbar/Navbar";
import StyledButton from "@/components/StyledButton/StyledButton";
import { PersonAdd, FilterList, FileDownload, Refresh } from "@mui/icons-material";
import { Box, Divider, Typography } from "@mui/material";

export default function Doctors() {
  return (
    <Box display="flex" minHeight="100vh">
      <Navbar />
      <Divider orientation="vertical" flexItem />

      <Box component="main" flexGrow={1} paddingX={12} paddingY={8}>
        <Typography variant="h1">Doctors</Typography>

        <Box display={"flex"} py={4} gap={2}>
          <Box display={"flex"} gap={1}>
            <StyledButton label="New Doctor" startIcon={<PersonAdd />} />
            <StyledButton startIcon={<FilterList />} tooltip="Filter" />
            <StyledButton startIcon={<FileDownload />} tooltip="Download CSV" />
            <StyledButton startIcon={<Refresh />} tooltip="Reload" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
