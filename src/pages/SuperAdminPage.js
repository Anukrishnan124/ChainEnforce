import { Stack, Typography, Box, Divider, Tabs, Tab } from "@mui/material";
import { useEffect, useState } from "react";
import SetThreshold from "../components/SetThreshold";
import Search from "../components/Search";
import { getComplaints } from "../functions/ContractInteractions";
import AdminViewComplaint from "../components/AdminViewComplaint";
import ExpiredComplaints from "../components/ExpiredComplaints";

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

const SuperAdminPage = ({ wallet }) => {
  const [value, setValue] = useState(0);
  const [ids, setIds] = useState([]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    if (wallet) {
      getComplaints(setIds);
    }
  }, [wallet]);

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
        <Typography sx={{ mt: 2, mb: 2 }} variant="h5">
          Super Admin Dashboard
        </Typography>
      </Stack>

      <Box sx={{ mt: 2, width: "80%", mx: "auto", mb: 10 }}>
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
            <Tab label="Expired Complaints" />
            <Tab label="Search" />
            <Tab label="Set threshold" />
          </Tabs>
          <TabPanel value={value} index={0}>
            {ids
              ? ids.map((data, index) => (
                  <AdminViewComplaint id={data} key={index} />
                ))
              : null}
          </TabPanel>
          <TabPanel value={value} index={1}>
            <ExpiredComplaints/>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <Search />
          </TabPanel>
          <TabPanel value={value} index={3}>
            <SetThreshold />
          </TabPanel>
        </Box>
      </Box>
    </>
  );
};

export default SuperAdminPage;
