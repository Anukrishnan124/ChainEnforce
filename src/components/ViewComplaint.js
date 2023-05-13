import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";
import { Divider, Stack } from "@mui/material";
import { useState } from "react";
import { viewComplaint } from "../functions/ContractInteractions";

const ViewComplaints = ({ expanded, handleChange, id }) => {
  const [details, setDetails] = useState([]);

  const handleClick = () => {
    viewComplaint(id, setDetails);
  };

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
        <Typography>{details[2]}</Typography>
        <Typography textAlign={"left"}>Complaint description: </Typography>
        <Typography>{details[3]}</Typography>
        <Divider sx={{ mt: 2 }} />
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          sx={{ mt: 2 }}
        >
          <Typography>
            Application Status:
            <br />
            {details[5]
              ? "Accepted"
              : !details[4]
              ? "Under Verification"
              : "Rejected"}
          </Typography>
          <Typography>
            Updates:
            <br />
            {details[4]}
          </Typography>
        </Stack>
      </AccordionDetails>
    </Accordion>
  );
};

export default ViewComplaints;
