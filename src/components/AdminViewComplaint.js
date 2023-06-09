import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Stack,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { getDetails } from "../functions/ContractInteractions";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
// import Paper from "@mui/material/Paper";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import ImageViewer from "react-simple-image-viewer";
import UpdateMsg from "./UpdateMsg";
import ResolveBtn from "./ResolveBtn";
import AcceptReject from "./AcceptRejectBtn";

const AdminViewComplaint = ({ id }) => {
  const [data, setData] = useState("");
  const [rows, setRows] = useState([]);
  const [open, setOpen] = useState(false);

  const handleView = (val) => {
    setOpen(val);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClick = () => {
    if (!data) getDetails(id, setData);
  };

  const handleReload = () => {
    getDetails(id, setData);
  };

  function createData(title, value) {
    return { title, value };
  }
  console.log(data[14])
  useEffect(() => {
    if (data) {
      setRows([
        createData("Address of user", data[0]),
        createData(
          "Complaint type:",
          parseInt(data[1]) === 1
            ? "Cyber crime"
            : parseInt(data[1]) === 2
            ? "Theft"
            : parseInt(data[1]) === 3
            ? "Drug"
            : parseInt(data[1]) === 4
            ? "Others"
            : null
        ),
        createData("Name", data[2]),
        createData("Email", data[3]),
        createData("Phone", parseInt(data[4]).toString()),
        createData("dob", dayjs.unix(parseInt(data[5])).format("DD/MM/YYYY")),
        createData("Address", data[6]),
        createData("Grievance", data[7]),
        createData("Nearest Police Station", data[8]),
        createData(
          "Proof",
          <Button
            variant="outlined"
            endIcon={<OpenInNewIcon />}
            onClick={() => handleView(1)}
          >
            Open
          </Button>
        ),
        createData(
          "Attachment",
          <Button
            variant="outlined"
            endIcon={<OpenInNewIcon />}
            onClick={() => handleView(2)}
          >
            Open
          </Button>
        ),
        createData("Updates", data[11]),
        createData(
          "Accepted",
          data[13] == 1
            ? "Accepted"
            : data[13] == 2
            ? "Rejected"
            : "Under Verification"
        ),
        createData("Updated on", String(dayjs.unix(parseInt(data[12])))),
      ]);
    }
  }, [data]);

  return (
    <>
      {id ? (
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            onClick={handleClick}
          >
            <Typography>Application id: {id}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            {data[2] !== "" ? (
              <>
                <TableContainer>
                  <Table
                    sx={{ minWidth: 650, backgroundColor: "#FEFEFE" }}
                    aria-label="simple table"
                  >
                    <TableBody>
                      {rows
                        ? rows.map((data, index) => (
                            <TableRow key={index} sx={{ width: "100%" }}>
                              <TableCell sx={{ width: "30%" }}>
                                {data.title}
                              </TableCell>
                              <TableCell sx={{ width: "30%" }}>
                                {data.value}
                              </TableCell>
                            </TableRow>
                          ))
                        : null}
                    </TableBody>
                  </Table>
                </TableContainer>
                
                          
                <Stack
                  direction={"row"}
                  sx={{ mt: 2 }}
                  justifyContent={"space-evenly"}
                >
                  {data[13] == 0 ? (
                    <AcceptReject id={id} />
                  ) : !data[14] ? (
                    <>
                      <Button variant="outlined" onClick={handleReload}>
                        Reload data
                      </Button>
                      <UpdateMsg id={id} />
                      <ResolveBtn id={id} resolve={true} text={"Resolve"} />
                    </>
                  ) : <Typography>Resolved</Typography>}
                </Stack>
              </>
            ) : (
              <Typography>Invalid application id</Typography>
            )}
          </AccordionDetails>
        </Accordion>
      ) : null}
      {open ? (
        <ImageViewer
          src={open === 1 ? [data[9]] : [data[10]]}
          currentIndex={0}
          disableScroll={false}
          closeOnClickOutside={true}
          onClose={handleClose}
        />
      ) : null}
    </>
  );
};

export default AdminViewComplaint;
