import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <>
      <Box minHeight={"100vh"} pt={'20px'}>
        <Outlet />
      </Box>
    </>
  );
}

export default RootLayout;
