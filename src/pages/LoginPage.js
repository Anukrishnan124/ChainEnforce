import { Button, Stack } from "@mui/material";
import Appbar from "../components/Appbar";
import detectEthereumProvider from '@metamask/detect-provider'
import Swal from 'sweetalert2'
import ConnectWallet from "../functions/ConnectWallet";


const LoginPage = ({setWallet}) => {
  const handleClick = () => {
    
    // const provider = await detectEthereumProvider();
    // if (provider) {
    //   const accounts = await provider.request({
    //     method: 'eth_requestAccounts'
    //   });
    //   setWallet(accounts[0]);
    //   console.log(accounts[0])
    //   Swal.fire({
    //     title: 'Login Successful!',
    //     // text: 'Do you want to continue',
    //     icon: 'success',
    //     confirmButtonText: 'ok'
    //   })
    // } else {
    //   console.log('Please install MetaMask!')
    // }
  }
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
