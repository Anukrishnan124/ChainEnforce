import {
  Stack,
  Typography,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  Box,
  FormControl,
  Button,
} from "@mui/material";
import BasicDatePicker from "./BasicDatePicker";
import { handlePhone } from "../functions/Validations";

const CustomInput = ({
  label,
  isText,
  isDate,
  isNum,
  isMultiLine,
  isList,
  isFile,
  placeholder,
  title,
  array,
  value,
  onChange,
  disabled
}) => {
  const handleChange = (e) => {
    onChange(e.target.value);
  };

  const handleFiles = (e) => {
    onChange(e.target.files[0]);
  };

  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      justifyContent="space-between"
      sx={{ width: "100%" }}
    >
      <Typography>{title}</Typography>

      {isText ? (
        <TextField
          label={label}
          value={value}
          placeholder={placeholder}
          onChange={handleChange}
          disabled={disabled}
        ></TextField>
      ) : null}
      {isNum ? (
        <TextField
          label={label}
          value={value}
          placeholder={placeholder}
          onChange={(e) => handlePhone(e.target.value, onChange)}
          disabled={disabled}
        />
      ) : null}
      {isDate ? <BasicDatePicker onChange={onChange} value={value} disabled={disabled} /> : null}
      {isMultiLine ? (
        <TextField
          label={label}
          multiline
          rows={4}
          placeholder={placeholder}
          sx={{ width: "223px" }}
          value={value}
          onChange={handleChange}
          disabled={disabled}
        />
      ) : null}
      {isList ? (
        <Box sx={{ width: "223px" }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">{label}</InputLabel>
            <Select label={label} onChange={handleChange} value={value} disabled={disabled}>
              {array
                ? array.map((data, index) => (
                    <MenuItem key={index} value={data.id}>
                      {data.text}
                    </MenuItem>
                  ))
                : null}
            </Select>
          </FormControl>
        </Box>
      ) : null}
      {isFile ? (
        <Stack direction={"column"} sx={{width: "223px"}}>
          <Button variant="outlined" component="label" sx={{ width: "100%" }} disabled={disabled}>
            Upload
            <input
              hidden
              accept="image/*"
              multiple
              type="file"
              onChange={handleFiles}
            />
          </Button>
          {value ? <Typography  variant="caption">{value}</Typography> : null}
          
        </Stack>
      ) : null}
    </Stack>
  );
};

export default CustomInput;
