import { specialties } from "@/utils/MockSpecialtyData";
import { FormControl, InputLabel, Select, MenuItem, SelectChangeEvent } from "@mui/material";
import { useState } from "react";

export default function SpecialtySelect() {
  const [specialty, setSpecialty] = useState<string>("");

  const handleSpecialtyChange = (event: SelectChangeEvent<string>) => {
    setSpecialty(event.target.value as string);
  };

  return (
    <FormControl variant="standard" sx={{ flexGrow: 1, width: 0 }}>
      <InputLabel id="specialty-label" shrink={true}>
        Specialty
      </InputLabel>
      <Select
        labelId="specialty-label"
        id="specialty"
        value={specialty}
        onChange={handleSpecialtyChange}
        label="Specialty"
        displayEmpty
        renderValue={(selected) =>
          selected ? selected : <span style={{ color: "#94a3b8" }}>Any</span>
        }
      >
        <MenuItem value="">Any</MenuItem>
        {specialties.map((spec) => (
          <MenuItem key={spec.id} value={spec.name}>
            {spec.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
