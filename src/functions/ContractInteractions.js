import { ethers } from "ethers";
import ABI from "../contract/ABI.json";

const ADDRESS = process.env.REACT_APP_SMART_CONTRACT_ADDRESS;

const UploadGrievance = (
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
) => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
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
      console.log(res.hash);
    })
    .catch((err) => {
      console.log(err)
    });

};

export { UploadGrievance };
