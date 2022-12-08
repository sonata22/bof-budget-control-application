import { Box, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { SavingProps } from "../types/saving";
import CircularProgress from "@mui/material/CircularProgress";

const Saving = ({ saving }: SavingProps) => {
  const [target, setTarget] = useState(0);
  return (
    <div>
      <p>Current saving: {saving}</p>
      <p>Current target: {target}</p>
      <Box sx={{ position: "relative", display: "inline-flex" }}>
        <CircularProgress
          variant="determinate"
          value={(saving / target) * 100}
          defaultValue="0"
        />
        <Box
          sx={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: "absolute",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="caption"
            component="div"
            color="text.secondary"
          >{`${Math.round((saving / target) * 100)}%`}</Typography>
        </Box>
      </Box>
      <form>
        <TextField
          label="Set target"
          variant="standard"
          onChange={(e) => setTarget(Number(e.target.value))}
          type="number"
        />
      </form>
    </div>
  );
};

export default Saving;
