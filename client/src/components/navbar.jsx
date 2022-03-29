import { Box, Grid, Link } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import { ColorModeSwitcher } from "../ColorSwitcher";

export default function NavBar() {
  const location = useLocation();
  return (
    <Grid templateColumns="repeat(3, 1fr)" gap={6} fontSize="2em">
      <Box w="100%">
        <ColorModeSwitcher />
        <Link href="/">home</Link>
      </Box>
      <Box w="100%" />
      <Box w="100%" display="flex">
        <div style={{ marginLeft: "auto" }}>
          {location.pathname !== "/register" && (
            <Link mr="30px" href="/register">
              register
            </Link>
          )}
        </div>
      </Box>
    </Grid>
  );
}
