import { Stack, Typography, Box, Divider } from "@mui/material";
import PermanentDrawer from "../components/PermanentDrawer";
import Data from "../data/Owner/OwnerDrawer";
import { Outlet } from "react-router-dom";

const OwnerPage = () => {
  return (
    <>
      <Stack
        sx={{
          backgroundColor: "white",
          width: "80%",
          borderRadius: "20px",
          mx: "auto",
          mt: 5,
        }}
      >
        <Box sx={{ height: 60 }}>
          <Typography variant="h5" sx={{ mt: 1.5 }}>
            Owner Dashboard
          </Typography>
        </Box>

        <Divider />
        <Box sx={{ position: "relative" }} display={"flex"}>
          <PermanentDrawer arr={Data} />

          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Outlet />
          </Box>
        </Box>
      </Stack>
    </>
  );
};

export default OwnerPage;
