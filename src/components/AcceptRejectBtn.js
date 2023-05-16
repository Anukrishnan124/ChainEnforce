import { Button, Modal, Box, Typography, TextField } from "@mui/material";
import { useState } from "react";
import { validateComplaint } from "../functions/ContractInteractions";

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

const RejectBtn = ({ id }) => {
  const [msg, setMsg] = useState("");
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleClick = () => {
    if (msg) validateComplaint(id, 2, msg, setOpen);
  };

  return (
    <>
      <Button variant="outlined" onClick={handleOpen}>
        Reject
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Typography variant="h6" component={"h2"}>
            Reason to reject
          </Typography>
          <br />
          <TextField
            multiline
            rows={4}
            sx={{ width: "100%" }}
            onChange={(e) => setMsg(e.target.value)}
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

const AcceptReject = ({ id }) => {
  const handleClick = () => {
    validateComplaint(id, 1, "");
  };
  return (
    <>
      <Button variant="outlined" onClick={handleClick}>
        Accept
      </Button>
      <RejectBtn id={id} />
    </>
  );
};

export default AcceptReject;
