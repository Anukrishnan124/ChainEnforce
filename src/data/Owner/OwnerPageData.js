import {
  addCyberAdmin,
  addTheftAdmin,
  addDrugAdmin,
  addOthersAdmin,
} from "../../functions/ContractInteractions";

const Data = {
  "add-cybercrime-admin": {
    title: "Add Cyber Crime Admin",
    label: "Address",
    onChange: addCyberAdmin,
  },
  "add-theft-admin": {
    title: "Add Theft Admin",
    label: "Address",
    onChange: addTheftAdmin,
  },
  "add-drug-admin": {
    title: "Add Drug Admin",
    label: "Address",
    onChange: addDrugAdmin,
  },
  "add-others-admin": {
    title: "Add Others Admin",
    label: "Address",
    onChange: addOthersAdmin,
  },
};

export default Data;
