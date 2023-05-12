import { Button, Stack } from "@mui/material";
import Appbar from "../components/Appbar";
import detectEthereumProvider from '@metamask/detect-provider'
import Swal from 'sweetalert2'
import ConnectWallet from "../functions/ConnectWallet";


const LoginPage = ({setWallet}) => {
  return (
    <>
      {/* <Appbar showLogin={false} /> */}
      <Stack
        sx={{
          width: "300px",
          height: "500px",
          backgroundColor: "white",
          borderRadius: "20px",
          mx: "auto",
          mt: "calc((100vh - 500px)/2)",
        }}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Button variant="contained" sx={{ width: "90%" }} onClick={() => {
          ConnectWallet(setWallet)
        }}>
          Connect metamask wallet
        </Button>
      </Stack>
    </>
  );
};

export default LoginPage;
