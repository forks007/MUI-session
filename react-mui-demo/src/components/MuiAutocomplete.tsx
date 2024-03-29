import { Stack, Autocomplete, TextField } from "@mui/material";
import { useState } from "react";

type Skill = {
  id: number;
  label: string;
};

const skills = ["HTML", "CSS", "JavaScript", "TypeScript", "React"];
const skillsOptions = skills.map((skill, index) => ({
  id: index + 1,
  label: skill,
}));
// [
//   ({ id: 1, label: "HTML" },
//   { id: 2, label: "CSS" },
//   { id: 3, label: "JavaScript" },
//   { id: 4, label: "TypeScript" },
//   { id: 5, label: "React" })
// ];

export const MuiAutocomplete = () => {
  const [value, setValue] = useState<string | null>(null);
  const [skill, setSkill] = useState<Skill | null>(null);

  console.log(skillsOptions);
  console.log(value);
  console.log(skill);
  return (
    <Stack spacing={2} width="250px">
      {/* with array  */}
      <Autocomplete
        options={skills}
        renderInput={(params) => <TextField {...params} label="Skills" />}
        value={value}
        onChange={(event: any, newValue: string | null) => {
          setValue(newValue);
        }}
        // freeSolo
      />

      {/* with object */}
      <Autocomplete
        options={skillsOptions}
        renderInput={(params) => <TextField {...params} label="Skills" />}
        value={skill}
        onChange={(_event: any, newValue: Skill | null) => {
          setSkill(newValue);
        }}
      />
    </Stack>
  );
};
