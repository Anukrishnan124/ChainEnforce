import { Stack, Typography, Box, Divider } from "@mui/material";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Data from "../data/Admins/AdminsData";
import { getComplaints } from "../functions/ContractInteractions";
import AdminViewComplaint from "../components/AdminViewComplaint";

const AdminPage = ({ wallet }) => {
  const [data, setData] = useState("");
  const [ids, setIds] = useState([]);
  const location = useLocation();

  useEffect(() => {
    if (wallet) {
      getComplaints(setIds);
    }
  }, [wallet]);

  useEffect(() => {
    setData(Data[location.pathname]);
  }, []);

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
        <Box sx={{ mt: 2, mb: 2 }}>
          <Typography variant="h5">Admin Dashboard</Typography>
        </Box>
        
      </Stack>
      <Box sx={{ mt: 2, width: "80%", mx: "auto", mb: 10 }}>
          <Typography variant="h6">{data?.title}</Typography>
          <Box>
            {ids
              ? ids.map((data, index) => (
                  <AdminViewComplaint id={data} key={index} />
                ))
              : null}
          </Box>
        </Box>
    </>
  );
};

export default AdminPage;
