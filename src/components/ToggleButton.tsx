import React, { useContext } from "react";
import { IconButton, useTheme } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { ThemeContext } from "../App";

const ToggleButton = () => {
  const colorMode = useContext(ThemeContext);
  const theme = useTheme();
  return (
    <IconButton onClick={() => colorMode.toggleMode()}>
      {theme.palette.mode === "light" ? (
        <Brightness4Icon />
      ) : (
        <Brightness7Icon />
      )}
    </IconButton>
  );
};

export default ToggleButton;
