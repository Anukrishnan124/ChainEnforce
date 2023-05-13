import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Data from "../data/Owner/OwnerPageData";

const AddAdmin = () => {
  const [addr, setAddr] = useState("");
  const [data, setData] = useState("");

  const location = useLocation();

  useEffect(() => {
    const route = location.pathname.split("/")[2];
    setData(Data[route]);
  }, [location]);

  return (
    <>
      <Box>
        <Typography variant="h6">{data?.title}</Typography>
        <Stack
          direction={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          sx={{ width: "100%", mt: 2 }}
          spacing={2}
        >
          <TextField
            label={data?.label}
            sx={{width: "100%"}}
            value={addr}
            onChange={(e) => {
              setAddr(e.target.value);
            }}
          ></TextField>
          <Button variant="contained" sx={{ width: 150 }} onClick={() => data.onChange(addr)}>
            Submit
          </Button>
        </Stack>
      </Box>
    </>
  );
};

export default AddAdmin;
