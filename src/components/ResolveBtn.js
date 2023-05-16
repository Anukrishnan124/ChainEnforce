import { Button } from "@mui/material";
import { resolveComplaint } from "../functions/ContractInteractions";

const ResolveBtn = ({ id, resolve, text }) => {
  const handleClick = () => {
    resolveComplaint(id, resolve);
  };

  return (
    <Button variant="outlined" onClick={handleClick} sx={{ width: 150 }}>
      {text}
    </Button>
  );
};

export default ResolveBtn;
