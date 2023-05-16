import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";
import { Divider, Stack } from "@mui/material";
import { useState } from "react";
import { viewComplaint } from "../functions/ContractInteractions";
import dayjs from "dayjs";

const ViewComplaint = ({ id }) => {
  const [details, setDetails] = useState("");

  const handleClick = () => {
    if (!details) viewComplaint(id, setDetails);
  };

  console.log(details);

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1bh-content"
        id="panel1bh-header"
        onClick={handleClick}
      >
        <Typography sx={{ width: "33%", flexShrink: 0 }}>
          Application id: {id}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography sx={{ textAlign: "left" }}>
          Complaint title:{" "}
          {parseInt(details[0]) === 1
            ? "Cyber Crime"
            : parseInt(details[0]) === 2
            ? "Theft"
            : parseInt(details[0]) === 3
            ? "Drug"
            : parseInt(details[0]) === 4
            ? "Others"
            : null}
        </Typography>
        <Typography textAlign={"left"}>
          Complaint description: {details[1]}{" "}
        </Typography>
        <Divider sx={{ mt: 2 }} />
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          sx={{ mt: 2, mb: 2 }}
        >
          <Typography>
            Application Status:
            <br />
            {details[3] == 1
              ? "Accepted"
              : details[3] == 0
              ? "Under Verification"
              : details[3] == 2
              ? "Rejected"
              : ""}
          </Typography>
          <Typography>
            Updates:
            <br />
            {details[2]}
          </Typography>
        </Stack>
        <Divider />
        <Typography sx={{ mt: 2, mb: 2 }}>
          Updated on: {String(dayjs.unix(parseInt(details[4])))}
        </Typography>
        {details[5] ? (
          <>
            <Divider />
            <Typography sx={{mt: 2}}>Resolved</Typography>
          </>
        ) : null}
      </AccordionDetails>
    </Accordion>
  );
};

export default ViewComplaint;
