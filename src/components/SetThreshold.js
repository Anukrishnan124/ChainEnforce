import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { setThreshold } from "../functions/ContractInteractions";
import { handleNum } from "../functions/Validations";

const SetThreshold = () => {
  const [value, setValue] = useState("");

  const handleClick = () => {
    setThreshold(parseInt(value));
  }

  return (
    <Box sx={{ width: "100%" }}>
      <Typography sx={{ float: "left" }} variant="h6">
        Set Threshold
      </Typography>
      <br />
      <TextField
        label="No. of days"
        value={value}
        onChange={(e) => handleNum(e.target.value, setValue)}
        sx={{ width: "100%", mt: 2 }}
      ></TextField>
      <br />
      <Button
        sx={{ width: "100px", mt: 3, mb: 3 }}
        variant="contained"
        onClick={handleClick}
      >
        Update
      </Button>
    </Box>
  );
}

export default SetThreshold;