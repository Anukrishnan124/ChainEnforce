import { Button, Stack } from "@mui/material";
import ConnectWallet from "../functions/ConnectWallet";
import { useEffect } from "react";
import Swal from "sweetalert2";

const OWNER = process.env.REACT_APP_OWNER_ADDR;
const CYBER_ADMIN = process.env.REACT_APP_CYBER_ADDR;
const THEFT_ADMIN = process.env.REACT_APP_THEFT_ADDR;
const DRUG_ADMIN = process.env.REACT_APP_DRUG_ADDR;
const OTHER_ADMIN = process.env.REACT_APP_OTHER_ADDR;

const LoginPage = ({ wallet, setWallet }) => {
  useEffect(() => {
    if (
      wallet === OWNER ||
      wallet === CYBER_ADMIN ||
      wallet === THEFT_ADMIN ||
      wallet === DRUG_ADMIN ||
      wallet === OTHER_ADMIN
    ) {
    } else if (wallet) {
      setWallet("");
      Swal.fire({
        title: "Invalid User",
        icon: "warning",
        confirmButtonText: "Ok",
      });
    }
  }, [wallet]);
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
        <Button
          variant="contained"
          onClick={() => {
            ConnectWallet(setWallet);
          }}
        >
          Connect wallet
        </Button>
      </Stack>
    </>
  );
};

export default LoginPage;
