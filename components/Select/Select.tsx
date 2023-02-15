import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
} from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import React from "react";

interface DeallSelectProps {
    value: string;
    handleChange? : (e: SelectChangeEvent) => void;
    options: string[];
    label: string;
}

const DeallSelect = ({value, handleChange, options, label}: DeallSelectProps) => {

  return (
    <div className="deall-select">
      <FormControl variant="standard" className="w-full">
        <InputLabel id="demo-simple-select-helper-label">{label}</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={value}
          label={label}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
            {options.map((p,key) => (
                <MenuItem key={key} value={p}>{p}</MenuItem>
            ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default DeallSelect;
