import { Stack, Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { viewComplaints } from "../functions/ContractInteractions";
import ConnectWallet from "../functions/ConnectWallet";
import ViewComplaint from "../components/ViewComplaint";

const ViewStatus = ({ wallet, setWallet }) => {
  const [ids, setIds] = useState("");

  useEffect(() => {
    if (wallet) {
      viewComplaints(setIds);
    }
  }, [wallet]);
  
  return (
    <>
      {!wallet ? (
        <Stack
          sx={{
            backgroundColor: "white",
            width: "300px",
            height: "400px",
            mt: "calc((100vh - 64px)/2 - 200px)",
            mx: "auto",
            borderRadius: "20px",
          }}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Button variant="contained" onClick={() => ConnectWallet(setWallet)}>
            Connect Wallet
          </Button>
        </Stack>
      ) : null}
      {wallet && ids ? (
        <Stack sx={{ mt: 5 }}>
          <Typography>Your Complaints</Typography>
          <Stack sx={{ width: "70vw", mx: "auto", mt: 2 }}>
            {ids.map((data, index) => (
              <ViewComplaint key={index} id={data} />
            ))}
          </Stack>
        </Stack>
      ) : null}
    </>
  );
};

export default ViewStatus;
