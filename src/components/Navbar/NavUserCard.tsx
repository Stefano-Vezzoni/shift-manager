import { Logout } from "@mui/icons-material";
import { Card, Stack, Avatar, Box, Typography, IconButton } from "@mui/material";

export default function NavUserCard() {
  return (
    <Card sx={{ p: 4 }}>
      <Stack direction="row" spacing={2} alignItems="center">
        <Avatar alt="John Doe" src="/path/to/avatar.jpg" sx={{ width: 56, height: 56 }} />

        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="body1">John Doe</Typography>
          <Typography variant="body2">HR Manager</Typography>
        </Box>

        <IconButton aria-label="sign out" size="small" color="inherit" sx={{ marginRight: "auto" }}>
          <Logout fontSize="small" />
        </IconButton>
      </Stack>
    </Card>
  );
}
