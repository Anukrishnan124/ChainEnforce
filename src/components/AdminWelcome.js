import { Stack, Typography } from "@mui/material";

const Welcome = () => {
  return (
    <>
      <Stack
        sx={{ width: "100%", height: "100%" }}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Typography>Welcome to Admin dashboard</Typography>
      </Stack>
    </>
  );
};

export default Welcome;
