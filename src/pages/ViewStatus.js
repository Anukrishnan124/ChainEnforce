import { Stack, Button, Typography, Accordion } from "@mui/material";
import { useState } from "react";
import { getApplicationIds } from "../functions/ContractInteractions";

import ViewComplaints from "../components/ViewComplaint";

const ViewStatus = () => {
  const [ids, setIds] = useState("");

  return (
    <>
      {!ids ? (
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
          <Button variant="contained" onClick={() => getApplicationIds(setIds)}>
            Connect Wallet
          </Button>
        </Stack>
      ) : null}
      {ids ? (
        <Stack sx={{ mt: 5 }}>
          <Typography>Your Complaints</Typography>
          <Stack sx={{ width: "70vw", mx: "auto", mt: 2 }}>
            {ids.map((data, index) => (
              <ViewComplaints key={index} id={data} />
            ))}
          </Stack>
        </Stack>
      ) : null}
    </>
  );
};

export default ViewStatus;
