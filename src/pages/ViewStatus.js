import { Stack, Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
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
          <Button
            variant="contained"
            sx={{ mt: 2 }}
            onClick={() => getApplicationIds(setIds)}
          >
            Connect Wallet
          </Button>
        </Stack>
      ) : null}
      {ids ? (
        <Stack sx={{mt: 5}}>
          <Typography>Your Complaints</Typography>
          {ids.map((data, index) => (
            <ViewComplaints
              key={index}
              id={data}
            />
          ))}
        </Stack>
      ) : null}
    </>
  );
};

export default ViewStatus;
