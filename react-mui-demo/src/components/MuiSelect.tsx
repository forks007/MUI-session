import { useState } from "react";
import { Box, TextField, MenuItem } from "@mui/material";

export const MuiSelect = () => {
  const [countries, setCountries] = useState<string>("");
  console.log(countries);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setCountries(value);
  };
  return (
    <Box width="250px">
      <TextField
        select
        label="Select country"
        // SelectProps={{
        //   multiple: true, //see for yourself
        // }}
        size="small"
        color="secondary"
        helperText="Please select your country"
        value={countries}
        onChange={handleChange}
      >
        <MenuItem value="IN">India</MenuItem>
        <MenuItem value="US">USA</MenuItem>
        <MenuItem value="AU">Australia</MenuItem>
      </TextField>
    </Box>
  );
};
