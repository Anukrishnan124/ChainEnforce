import { Stack, Typography, Box, Divider, Tabs, Tab } from "@mui/material";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Data from "../data/Admins/AdminsData";
import { getComplaints } from "../functions/ContractInteractions";
import AdminViewComplaint from "../components/AdminViewComplaint";
import Search from "../components/Search";

function TabPanel({ children, value, index }) {
  return (
    <div role="tabpanel" hidden={value !== index}>
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const AdminPage = ({ wallet }) => {
  const [value, setValue] = useState(0);
  const [data, setData] = useState("");
  const [ids, setIds] = useState([]);
  const location = useLocation();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
        <Box
          sx={{
            width: "100%",
            bgcolor: "background.paper",
            mt: 1,
            borderRadius: "20px",
          }}
        >
          <Tabs value={value} onChange={handleChange} centered>
            <Tab label="All Complaints" />
            <Tab label="Search" />
          </Tabs>
          <TabPanel value={value} index={0}>
            {ids
              ? ids.map((data, index) => (
                  <AdminViewComplaint id={data} key={index} />
                ))
              : null}
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Search />
          </TabPanel>
        </Box>
      </Box>
    </>
  );
};

export default AdminPage;
