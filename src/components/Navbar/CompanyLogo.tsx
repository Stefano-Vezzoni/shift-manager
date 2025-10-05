import { Business } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";

export default function CompanyLogo() {
  return (
    <Box component="div" display="flex" alignItems="center" paddingX={4} paddingY={3} gap={1}>
      <Business fontSize="large" />
      <Typography variant="h4">Shift Manager</Typography>
    </Box>
  );
}
