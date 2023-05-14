import { Box, Button, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import CustomInput from "../components/CustomInput";
import Title from "../data/ComplaintTitle";
import Districts from "../data/ListOfDistrict";
import PoliceStations from "../data/ListOfPoliceStation";
import { addComplaint } from "../functions/ContractInteractions";
import uniqid from "uniqid";
import GetHash from "../functions/Hash";
import UploadFile from "../functions/FirebaseInterations";
import ConnectWallet from "../functions/ConnectWallet";
import dayjs from "dayjs";

const RegisterGrievance = ({ wallet, setWallet }) => {
  const [disable, setDisabled] = useState(wallet ? false : true);
  const [id, setId] = useState(uniqid());
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [dob, setDob] = useState(null);
  const [address, setAddress] = useState("");
  const [title, setTitle] = useState("");
  const [grievance, setGrievance] = useState("");
  const [district, setDistrict] = useState("");
  const [policeStation, setPoliceStation] = useState("");
  const [identity, setIdentity] = useState(null);
  const [applicationPic, setApplicationPic] = useState(null);
  const [identityHash, setIdentityHash] = useState("");
  const [applicationHash, setApplicationHash] = useState("");
  const [identityUrl, setIdentityUrl] = useState("");
  const [appUrl, setAppUrl] = useState("");
  const [email, setEmail] = useState("");
  const [complete, setComplete] = useState(false);

  const handleSubmit = () => {
    UploadFile("Identities", identityHash, identity, setIdentityUrl);
    UploadFile("Applications", applicationHash, applicationPic, setAppUrl);
  };

  useEffect(() => {
    GetHash(identity, setIdentityHash);
  }, [identity]);

  useEffect(() => {
    GetHash(applicationPic, setApplicationHash);
  }, [applicationPic]);

  useEffect(() => {
    if (identityUrl && appUrl) {
      const unixtime = dayjs(dob).unix();
      const phn = parseInt(phone);
      const type = parseInt(title);
      if(unixtime && phn && type) {
        addComplaint(
          id,
          type,
          name,
          email,
          phn,
          unixtime,
          address,
          grievance,
          policeStation,
          identityUrl,
          appUrl,
          setComplete
        );
      }
      
    }
  }, [identityUrl, appUrl]);

  useEffect(() => {
    if (wallet) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [wallet]);

  useEffect(() => {
    if (complete) {
      setId(uniqid());
      setName("");
      setEmail("");
      setPhone("");
      setDob(null);
      setAddress("");
      setTitle("");
      setGrievance("");
      setDistrict("");
      setPoliceStation("");
      setIdentity(null);
      setApplicationPic(null);
      setIdentityHash("");
      setApplicationHash("");
      setIdentityUrl("");
      setAppUrl("");
      setComplete(false);
    }
  }, [complete]);

  return (
    <>
      <Stack
        sx={{
          backgroundColor: "white",
          width: "700px",
          borderRadius: "20px",
          p: 3,
          mx: "auto",
          mt: 5,
          mb: 5,
        }}
        direction={"column"}
        alignItems={"center"}
      >
        <Typography variant="h4">Register Grievance</Typography>

        {!wallet ? (
          <Button
            variant="contained"
            sx={{ mt: 2 }}
            onClick={() => {
              ConnectWallet(setWallet);
            }}
          >
            Connect Wallet
          </Button>
        ) : null}

        <Box sx={{ width: "600px" }} textAlign={"left"}>
          <Typography sx={{ mt: 2 }}>Application id: {id}</Typography>
        </Box>

        <Stack alignItems={"center"} sx={{ mt: 2, width: "600px" }} spacing={2}>
          <CustomInput
            title={"Enter your Name:"}
            isText={true}
            label={"Name"}
            placeholder={"Name"}
            value={name}
            onChange={setName}
            disabled={disable}
          />
          <CustomInput 
            title={"Enter your email:"}
            isText={true}
            label={"Email"}
            placeholder={"abc@def.com"}
            value={email}
            onChange={setEmail}
            disabled={disable}
          />
          <CustomInput
            title={"Enter your Phone no:"}
            isNum={true}
            value={phone}
            label={"Phone"}
            placeholder={"9876543210"}
            onChange={setPhone}
            disabled={disable}
          />
          <CustomInput
            title={"Enter your Date of Birth:"}
            isDate={true}
            onChange={setDob}
            value={dob}
            disabled={disable}
          />
          <CustomInput
            title={"Enter your Address:"}
            isMultiLine={true}
            label={"Address"}
            placeholder={"Address"}
            value={address}
            onChange={setAddress}
            disabled={disable}
          />
          <CustomInput
            title={"Enter your District:"}
            isList={true}
            label={"District"}
            array={Districts}
            value={district}
            onChange={setDistrict}
            disabled={disable}
          />
          <CustomInput
            title={"Enter your Grievance Title:"}
            isList={true}
            label={"Title"}
            array={Title}
            value={title}
            onChange={setTitle}
            disabled={disable}
          />
          <CustomInput
            title={"Enter your Grievance Description:"}
            isMultiLine={true}
            label={"Grievance"}
            value={grievance}
            placeholder={"Grievance"}
            onChange={setGrievance}
            disabled={disable}
          />
          <CustomInput
            title={"Enter your Nearest Police Station:"}
            isList={true}
            label={"Police Station"}
            array={PoliceStations[district]}
            value={policeStation}
            onChange={setPoliceStation}
            disabled={disable}
          />
          <CustomInput
            title={"Upload your Identity proof:"}
            isFile={true}
            onChange={setIdentity}
            value={identity?.name}
            disabled={disable}
          />
          <CustomInput
            title={"Upload your Application:"}
            isFile={true}
            onChange={setApplicationPic}
            value={applicationPic?.name}
            disabled={disable}
          />
        </Stack>
        <Button
          variant="contained"
          sx={{ width: "200px", mt: 4 }}
          onClick={handleSubmit}
          disabled={disable}
        >
          Submit
        </Button>
      </Stack>
    </>
  );
};

export default RegisterGrievance;
