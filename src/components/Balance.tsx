import React, { useState } from "react";

import { BalanceProps } from "../types/balance";
import "../styles/balance.css";
import useTheme from "@mui/material/styles/useTheme";
import { Box, Button, Stack, TextField } from "@mui/material";
import CachedIcon from "@mui/icons-material/Cached";

const Balance = ({ balance, setSaving }: BalanceProps) => {
  const [amount, setAmount] = useState(0);
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSaving((saving) => saving + amount);
  };
  const theme = useTheme();
  return (
    <Stack
      sx={{ bgcolor: theme.palette.mode === "dark" ? "#656565" : "#caf7e2" }}
      direction="column"
      alignItems="center"
    >
      <p>Current balance: {balance}</p>
      <Stack component="form" onSubmit={(e) => onSubmit(e)} direction="column" padding={2} spacing={1.5}>
        <TextField
          label="Add to saving account"
          variant="standard"
          onChange={(e) => setAmount(Number(e.target.value))}
          sx={{ alignmentBaseline: "center" }}
          type="number"
        />
        <Button
          type="submit"
          variant="outlined"
          startIcon={<CachedIcon />}
          size="small"
          color="secondary"
        >
          Transfer
        </Button>
      </Stack>
    </Stack>
  );
};

export default Balance;
