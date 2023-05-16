import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import AdminViewComplaint from "./AdminViewComplaint";

const Search = () => {
  const [id, setId] = useState("");
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(true);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Typography sx={{ float: "left" }} variant="h6">
        Search complaint
      </Typography>
      <br />
      <TextField
        label="Application id"
        value={id}
        onChange={(e) => setId(e.target.value)}
        sx={{ width: "100%", mt: 2 }}
      ></TextField>
      <br />
      <Button
        sx={{ width: "100px", mt: 3, mb: 3 }}
        variant="contained"
        onClick={handleClick}
      >
        Search
      </Button>
      {show ? <AdminViewComplaint id={id} /> : null}
    </Box>
  );
};

export default Search;
