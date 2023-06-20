import { Stack, Typography, Box, Divider } from "@mui/material";
import logoBlack from "../assets/logo black.png";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const list = [
  "Grievance can be lodged by any individual.",
  "Online lodging of grievance.",
  "Dedicated officer validation of the grievance.",
  "Facility to send reminder for pending grievance.",
  "Token number generation for further status inquiry.",
  "View current status of grievance.",
  "Facility to upload one grievance document.",
];

const Home = () => {
  return (
    <>
      <Stack
        sx={{
          backgroundColor: "white",
          width: "100%",
          minHeight: "calc(100vh - 65px)",
        }}
        justifyContent={"center"}
      >
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-evenly"}
        >
          <Box component="img" src={logoBlack} width="30%" maxWidth={"35%"} />
          <Box sx={{width: "1px", backgroundColor: "#000000", height: "300px", opacity: "12%"}}>

          </Box>
          <Box >
            <Typography fontSize={45} textAlign={"left"} >About ChainEnforce</Typography>
            {list.map((data, index) => (
              <Box sx={{display: "flex"}}>
                <ArrowRightIcon />
                <Typography fontSize={"large"} textAlign={"left"} key={index}>{data}</Typography>
              </Box>
            ))}
          </Box>
        </Stack>
      </Stack>
    </>
  );
};
export default Home;
