import { ethers } from "ethers";
import ABI from "../contract/ABI.json";
import Swal from "sweetalert2";

const ADDRESS = process.env.REACT_APP_SMART_CONTRACT_ADDRESS;

const UploadGrievance = async (
  id,
  type,
  name,
  phone,
  dob,
  addr,
  title,
  desc,
  policeStation,
  proof,
  attachment,
  setComplete
) => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  await provider.send("eth_requestAccounts", []);
  const contract = new ethers.Contract(ADDRESS, ABI, provider);
  const signer = provider.getSigner();
  const daiWithSigner = contract.connect(signer);
  daiWithSigner
    .addComplaint(
      id,
      type,
      name,
      phone,
      dob,
      addr,
      title,
      desc,
      policeStation,
      proof,
      attachment
    )
    .then((res) => {
      setComplete(true);
      Swal.fire({
        title: "Registration Successfull",
        text: `Txn hash: ${res.hash}`,
        icon: "success",
        confirmButtonText: "Ok",
      });
    })
    .catch((err) => {
      // console.log(err);
      Swal.fire({
        title: "Error",
        text: `An error occured`,
        icon: "error",
        confirmButtonText: "Ok",
      });
    });
};

const getApplicationIds = async (setIds) => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  await provider.send("eth_requestAccounts", []);
  const contract = new ethers.Contract(ADDRESS, ABI, provider);
  const signer = provider.getSigner();
  const daiWithSigner = contract.connect(signer);
  daiWithSigner
    .checkComplaintStatus()
    .then((res) => {
      console.log(res);
      setIds(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

const viewComplaint = async (id, setComplaint) => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  await provider.send("eth_requestAccounts", []);
  const contract = new ethers.Contract(ADDRESS, ABI, provider);
  const signer = provider.getSigner();
  const daiWithSigner = contract.connect(signer);
  daiWithSigner
    .viewComplaint(id)
    .then((res) => {
      setComplaint(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

const addCyberAdmin = async (addr, flag) => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  await provider.send("eth_requestAccounts", []);
  const contract = new ethers.Contract(ADDRESS, ABI, provider);
  const signer = provider.getSigner();
  const daiWithSigner = contract.connect(signer);
  daiWithSigner
    .addCyberCrimeAdmin(addr)
    .then((res) => {
      Swal.fire({
        title: "Admin added Successfully",
        text: `Txn hash: ${res.hash}`,
        icon: "success",
        confirmButtonText: "Ok",
      });
    })
    .catch((err) => {
      Swal.fire({
        title: "Error",
        text: `An error occured`,
        icon: "error",
        confirmButtonText: "Ok",
      });
    });
};

const addTheftAdmin = async (addr) => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  await provider.send("eth_requestAccounts", []);
  const contract = new ethers.Contract(ADDRESS, ABI, provider);
  const signer = provider.getSigner();
  const daiWithSigner = contract.connect(signer);
  daiWithSigner
    .addTheftAdmin(addr)
    .then((res) => {
      Swal.fire({
        title: "Admin added Successfully",
        text: `Txn hash: ${res.hash}`,
        icon: "success",
        confirmButtonText: "Ok",
      });
    })
    .catch((err) => {
      Swal.fire({
        title: "Error",
        text: `An error occured`,
        icon: "error",
        confirmButtonText: "Ok",
      });
    });
};

const addDrugAdmin = async (addr) => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  await provider.send("eth_requestAccounts", []);
  const contract = new ethers.Contract(ADDRESS, ABI, provider);
  const signer = provider.getSigner();
  const daiWithSigner = contract.connect(signer);
  daiWithSigner
    .addDrugAdmin(addr)
    .then((res) => {
      Swal.fire({
        title: "Admin added Successfully",
        text: `Txn hash: ${res.hash}`,
        icon: "success",
        confirmButtonText: "Ok",
      });
    })
    .catch((err) => {
      Swal.fire({
        title: "Error",
        text: `An error occured`,
        icon: "error",
        confirmButtonText: "Ok",
      });
    });
};

const addOthersAdmin = async (addr) => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  await provider.send("eth_requestAccounts", []);
  const contract = new ethers.Contract(ADDRESS, ABI, provider);
  const signer = provider.getSigner();
  const daiWithSigner = contract.connect(signer);
  daiWithSigner
    .addOtherAdmin(addr)
    .then((res) => {
      Swal.fire({
        title: "Admin added Successfully",
        text: `Txn hash: ${res.hash}`,
        icon: "success",
        confirmButtonText: "Ok",
      });
    })
    .catch((err) => {
      Swal.fire({
        title: "Error",
        text: `An error occured`,
        icon: "error",
        confirmButtonText: "Ok",
      });
    });
};

export {
  UploadGrievance,
  getApplicationIds,
  viewComplaint,
  addCyberAdmin,
  addTheftAdmin,
  addDrugAdmin,
  addOthersAdmin,
};
