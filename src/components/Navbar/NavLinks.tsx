import { DomainAdd, EventAvailable, Group, Hub } from "@mui/icons-material";
import { Box, Link, Typography } from "@mui/material";
import NextLink from "next/link";

export default function NavLinks() {
  return (
    <Box display="flex" flexDirection="column" paddingX={4} paddingY={5} gap={3}>
      <Link display="flex" gap={1} component={NextLink} href="/doctors">
        <Group />
        <Typography variant="h5">Doctors</Typography>
      </Link>

      <Link display="flex" gap={1} component={NextLink} href="/specialties">
        <Hub />
        <Typography variant="h5">Specialties</Typography>
      </Link>

      <Link display="flex" gap={1} component={NextLink} href="/hospitals">
        <DomainAdd />
        <Typography variant="h5">Hospitals</Typography>
      </Link>

      <Link display="flex" gap={1} component={NextLink} href="/shifts">
        <EventAvailable />
        <Typography variant="h5">Shifts</Typography>
      </Link>
    </Box>
  );
}
