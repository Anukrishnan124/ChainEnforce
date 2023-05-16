import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { updateMessage } from "../functions/ContractInteractions";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const UpdateMsg = ({ id }) => {
  const [progress, setProgress] = useState("");
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    if(progress)
    updateMessage(id, progress, setOpen);
  }

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button variant="outlined" onClick={handleOpen}>
        Update Progress
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Typography variant="h6" component={"h2"}>
            Update progress
          </Typography>
          <br />
          <TextField
            multiline
            rows={4}
            sx={{ width: "100%" }}
            onChange={(e) => setProgress(e.target.value)}
          ></TextField>
          <Button
            variant="contained"
            sx={{ mt: 2, width: "100px", ml: "calc(50% - 50px)" }}
            onClick={handleClick}
          >
            Confirm
          </Button>
        </Box>
      </Modal>
    </>
  );
};

export default UpdateMsg;
