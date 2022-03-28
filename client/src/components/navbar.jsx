import { Box, Grid, Link } from "@chakra-ui/react";
import { ColorModeSwitcher } from "../ColorSwitcher";

export default function NavBar() {
  return (
    <Grid templateColumns="repeat(3, 1fr)" gap={6}>
    <Box w="100%">
      <ColorModeSwitcher />
      <Link href="/">home</Link>
    </Box>
    <Box w="100%"/>
    <Box w="100%" display="flex">
      <div style={{marginLeft:"auto"}}>
      <Link mr="30px">register</Link>
      </div>
    </Box>
  </Grid>
  );
}
