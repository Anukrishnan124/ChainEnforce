import { Button, Stack } from "@mui/material";
import ConnectWallet from "../functions/ConnectWallet";

const LoginPage = ({setWallet}) => {
  return (
    <>
      <Stack
        sx={{
          width: "300px",
          height: "400px",
          backgroundColor: "white",
          borderRadius: "20px",
          mx: "auto",
          mt: "calc((100vh - 64px)/2 - 200px)",
        }}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Button variant="contained"  onClick={() => {
          ConnectWallet(setWallet)
        }}>
          Connect wallet
        </Button>
      </Stack>
    </>
  );
};

export default LoginPage;
