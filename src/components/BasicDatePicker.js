import * as React from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateField } from '@mui/x-date-pickers/DateField';

export default function BasicDatePicker({ onChange, value, disabled }) {
  const handleChange = (e) => {
    onChange(e.$y+"-"+(e.$M+1)+"-"+e.$D);
  };
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DatePicker"]}>
        <DateField
          sx={{ width: "223px" }}
          format="YYYY-MM-DD"
          label="DOB"
          value={value}
          disabled={disabled}
          onChange={handleChange}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}
