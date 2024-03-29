import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { Nav } from "./Nav";

export function HomeLayout() {
  return (
    <Box>
      <Nav />
      <Outlet />
    </Box>
  );
}
