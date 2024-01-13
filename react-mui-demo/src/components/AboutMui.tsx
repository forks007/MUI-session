import { Box } from "@mui/material";
import { FC } from "react";

export const AboutMui: FC = () => {
  return (
    <Box sx={{ padding: "10px" }}>
      <h1>
        Material UI is an open-source React component library that implements
        Google's Material Design.
      </h1>
      <p>
        Material Design is an adaptable system of guidelines, components, and
        tools that support the best practices of user interface design.
      </p>
      <p>- comprehensive collection of prebuilt components</p>
      <p>
        - features a suite of customization options that make it easy to
        implement your own custom design system
      </p>
    </Box>
  );
};
