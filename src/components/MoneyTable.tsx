import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { MoneyItem } from "../types/money";

interface MoneyItemList {
  list: MoneyItem[];
}

const MoneyTable = ({ list }: MoneyItemList) => {
  return (
    <TableContainer
      sx={{
        width: "100%",
        height: 200,
        bgcolor: "background.default",
        overflow: "scroll",
      }}
    >
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell>Amount</TableCell>
            <TableCell>Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {list.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.title}</TableCell>
              <TableCell>{item.amount}</TableCell>
              <TableCell>{item.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MoneyTable;
