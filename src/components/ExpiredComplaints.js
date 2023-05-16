import { useEffect, useState } from "react";
import { getExpiredComplaints } from "../functions/ContractInteractions";
import { Typography, Box } from "@mui/material";
import AdminViewComplaint from "./AdminViewComplaint";

const ExpiredComplaints = () => {
  const [ids, setIds] = useState([]);

  const getExpiredIds = () => {
    getExpiredComplaints(setIds);
  };

  useEffect(() => {
    getExpiredIds();
  }, []);

  return (
    <>
      <Box>
        {ids[0] === "" ? (
          <Typography>Empty</Typography>
        ) : (
          <>
            <Box>
              {ids.map((data, index) => (
                <AdminViewComplaint id={data} key={index} />
              ))}
            </Box>
          </>
        )}
      </Box>
    </>
  );
};

export default ExpiredComplaints;
