import React, { useState } from "react";
import { MoneyProps } from "../types/money";
import { Box, TextField, Button, List, ListItem, styled } from "@mui/material";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import MoneyTable from "./MoneyTable";

const Money = ({ option, list, setList }: MoneyProps) => {
  //initial values are stated in brackets to avoid arrors of undefined values
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const [date, setDate] = useState("");
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //creating new list using deep copy
    //setList([...list, { title, amount, date, id:Date.now() }]);
    setList([{ amount, date, title, id: Date.now() }, ...list]);
  };
  //separate styling can be done here for the List element
  //for noe there is no any, and bgcolor is overwritten inside MoneyList itself
  const MoneyList = styled(List)({
    backgroundColor: "white",
  });
  return (
    <Box
      component="form"
      autoComplete="off"
      onSubmit={(e) => onSubmit(e)}
      display="flex"
      flexDirection="column"
      gap={2}
      //sx is to write css in line
      sx={
        {
          // backgroundColor: "blueviolet",
        }
      }
    >
      <TextField
        required
        label={`Title for ${option}`}
        variant="standard"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        value={title}
        sx={{ alignmentBaseline: "center" }}
      />
      {/* old version of the form
        <div>
          <label htmlFor="title">Title for {option}</label>
          <input
            type="text"
            name="title"
            id="title"
            onChange={(e) => {
              // e.target.value gives access to entered value
              setTitle(e.target.value);
            }}
          />
        </div> */}

      <TextField
        required
        label={`Amount of ${option}`}
        variant="standard"
        onChange={(e) => {
          setAmount(Number(e.target.value));
        }}
        type="number"
      />
      {/**
           * <div>
           * <label htmlFor="amount">Amount of {option}</label>
          <input
            type="number"
            name="amount"
            id="amount"
            onChange={(e) => {
              //need transform string to number here
              setAmount(Number(e.target.value));
            }}
          /> 
          </div>*/}

      <TextField
        required
        label={`Date of ${option}`}
        variant="standard"
        onChange={(e) => {
          setDate(e.target.value);
        }}
        InputLabelProps={{
          shrink: true,
        }}
        value={date}
        type="date"
      />

      {/**
           * <div>
           * <label htmlFor="date">Date of {option}</label>
          <input
            type="date"
            name="date"
            id="date"
            onChange={(e) => {
              setDate(e.target.value);
            }}
          /> 
          </div>
          */}
      <Button
        type="submit"
        variant="outlined"
        startIcon={<KeyboardDoubleArrowDownIcon />}
        size="small"
        color="secondary"
      >
        Submit
      </Button>
      {/**<button type="submit">Submit</button> */}

      {/**<MoneyList sx={{width:"100%", height: 200, bgcolor: "background.default", overflow: "scroll" }} >
        {list.length > 0 &&
          list.map((item) => (
            <ListItem key={item.id}>
              {item.title},{item.amount}, {item.date}
            </ListItem>
          ))}
      </MoneyList> */}
      <MoneyTable list={list} />
    </Box>
  );
};

export default Money;
