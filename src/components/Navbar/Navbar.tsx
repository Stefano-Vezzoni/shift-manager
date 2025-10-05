import { Box, Divider, Stack } from "@mui/material";
import CompanyLogo from "./CompanyLogo";
import NavLinks from "./NavLinks";
import NavUserCard from "./NavUserCard";

export default function Navbar() {
  return (
    <Box
      display={"flex"}
      flexDirection="column"
      component="nav"
      width={280}
      color="white"
      bgcolor="grey.900"
    >
      <CompanyLogo />
      <Divider color="white" />
      <NavLinks />

      <Stack sx={{ mt: "auto" }}>
        <Divider color="white" />
        <NavUserCard />
      </Stack>
    </Box>
  );
}
