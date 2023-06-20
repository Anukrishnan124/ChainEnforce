import { ethers } from "ethers";
import ABI from "../contract/ABI.json";
import Swal from "sweetalert2";

const ADDRESS = process.env.REACT_APP_SMART_CONTRACT_ADDRESS;

const ShowMsg = (title, icon, text) => {
  Swal.fire({
    title: title,
    icon: icon,
    text: text,
    confirmButtonText: "Ok"
  })
}

// to add admin by owner in owner dashboard
const addAdmin = (addr, type) => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const contract = new ethers.Contract(ADDRESS, ABI, provider);
  const signer = provider.getSigner();
  const daiWithSigner = contract.connect(signer);
  daiWithSigner.addAdmin(addr, type).then((res) => {
    ShowMsg("Admin Added Successfully", "success", `Txn hash: ${res.hash}`)
  }).catch(() => {
    ShowMsg("Error", "error", `Some error occured`)
  })
}


const setThreshold = (x) => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const contract = new ethers.Contract(ADDRESS, ABI, provider);
  const signer = provider.getSigner();
  const daiWithSigner = contract.connect(signer);
  daiWithSigner.setThreshold(x).then((res) => {
    ShowMsg("Threshold set Successfully", "success", `Txn hash: ${res.hash}`)
  }).catch((err) => {
    ShowMsg("Error", "error", `Some error occured`)
  })
}

const addComplaint = (id, type, name, email, phone, dob, addr, desc, policeStation, proof, attachment, setComplete) => {
  console.log({id, type, name, email, phone, dob, addr, desc, policeStation, proof, attachment});
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const contract = new ethers.Contract(ADDRESS, ABI, provider);
  const signer = provider.getSigner();
  const daiWithSigner = contract.connect(signer);
  daiWithSigner.addComplaint(id, type, name, email, phone, dob, addr, desc, policeStation, proof, attachment).then((res) => {
    ShowMsg("Complaint registered Successfully", "success", `Txn hash: ${res.hash}`)
    setComplete(true);
  }).catch((err) => {
    ShowMsg("Error", "error", `Some error occured`)
  })
}

const getExpiredComplaints = (setIds) => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const contract = new ethers.Contract(ADDRESS, ABI, provider);
  const signer = provider.getSigner();
  const daiWithSigner = contract.connect(signer);
  daiWithSigner.getExpiredComplaints().then((res) => {
    setIds(res);
    console.log(res);
  }).catch((err) => {
    ShowMsg("Error", "error", `Some error occured`)
  })
}

const validateComplaint = (id, status, msg, setOpen) => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const contract = new ethers.Contract(ADDRESS, ABI, provider);
  const signer = provider.getSigner();
  const daiWithSigner = contract.connect(signer);
  daiWithSigner.validateComplaint(id, status, msg).then((res) => {
    setOpen(false);
    ShowMsg("Complaint updated Successfully", "success", `Txn hash: ${res.hash}`)
  }).catch(() => {
    ShowMsg("Error", "error", `Some error occured`)
  })
}

const updateMessage = (id, msg, setOpen) => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const contract = new ethers.Contract(ADDRESS, ABI, provider);
  const signer = provider.getSigner();
  const daiWithSigner = contract.connect(signer);
  daiWithSigner.updateMessage(id, msg).then((res) => {
    ShowMsg("Complaint updated Successfully", "success", `Txn hash: ${res.hash}`);
    setOpen(false);
  }).catch((err) => {
    ShowMsg("Error", "error", `Some error occured`)
    setOpen(false);
  })
}

const viewComplaint = (id, setDetails) => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const contract = new ethers.Contract(ADDRESS, ABI, provider);
  const signer = provider.getSigner();
  const daiWithSigner = contract.connect(signer);
  daiWithSigner.viewComplaint(id).then((res) => {
    setDetails(res)
    console.log(res);
  }).catch((err) => {
    ShowMsg("Error", "error", `Some error occured`)
  })
}

const viewComplaints = (setIds) => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const contract = new ethers.Contract(ADDRESS, ABI, provider);
  const signer = provider.getSigner();
  const daiWithSigner = contract.connect(signer);
  daiWithSigner.viewComplaints().then((res) => {
    console.log(res);
    setIds(res);
  }).catch((err) => {
    ShowMsg("Error", "error", `Some error occured`)
  })
}

const getDetails = (id, setData) => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const contract = new ethers.Contract(ADDRESS, ABI, provider);
  const signer = provider.getSigner();
  const daiWithSigner = contract.connect(signer);
  daiWithSigner.getDetails(id).then((res) => {
    console.log(res)
    setData(res)
  }).catch((err) => {
    ShowMsg("Error", "error", `Some error occured`)
  })
}

const getComplaints = (setIds) => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const contract = new ethers.Contract(ADDRESS, ABI, provider);
  const signer = provider.getSigner();
  const daiWithSigner = contract.connect(signer);
  daiWithSigner.getComplaints().then((res) => {
    console.log(res)
    setIds(res);
  }).catch((err) => {
    ShowMsg("Error", "error", `Some error occured`)
  })
}

const resolveComplaint = (id, resolve) => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const contract = new ethers.Contract(ADDRESS, ABI, provider);
  const signer = provider.getSigner();
  const daiWithSigner = contract.connect(signer);
  daiWithSigner.resolveComplaint(id, resolve).then((res) => {
    ShowMsg("Complaint resolved Successfully", "success", `Txn hash: ${res.hash}`);
  }).catch((err) => {
    ShowMsg("Error", "error", `Some error occured`)
  })
}

export {
  addAdmin,
  setThreshold, 
  addComplaint, 
  getExpiredComplaints,  
  validateComplaint, 
  updateMessage, 
  viewComplaint,
  viewComplaints,
  getDetails,
  getComplaints,
  resolveComplaint
};
