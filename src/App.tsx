//external libraries
import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { ThemeProvider, Box, createTheme, Grid, Container } from "@mui/material";

import "./styles/App.css";
import Money from "./components/Money";
import Balance from "./components/Balance";
import Saving from "./components/Saving";
import { MoneyItem } from "./types/money";
import { deepOrange, orange, pink } from "@mui/material/colors";
import ToggleButton from "./components/ToggleButton";
import { stringify } from "querystring";

//only needed if I need to pass some arguments
interface CustomContext {
  toggleMode: () => void;
  incomes: MoneyItem[];
  setIncomes: Dispatch<SetStateAction<MoneyItem[]>>;
}
export const ThemeContext = createContext<CustomContext>({
  toggleMode: () => {},
  incomes: [],
  setIncomes: () => {},
});

function App() {
  const [mode, setMode] = useState<"light" | "dark">("light");
  const [incomes, setIncomes] = useState<MoneyItem[]>([]); //hooks at the top
  const [expenses, setExpenses] = useState<MoneyItem[]>([]);
  const [saving, setSaving] = useState(0);
  const [balance, setBalance] = useState(0);
  const totalIncome = incomes.reduce(
    (prev, current) => prev + current.amount,
    0
  );
  const totalExpense = expenses.reduce(
    (prev, current) => prev + current.amount,
    0
  );
  //setBalance(totalIncome - totalExpense); this line causes infinite loop as it forces the app component
  //to be rerendered every time setBalance is called, we need to use workaround here in form of a function
  //so it will be called every time incomes, expenses or saving are changed
  useEffect(() => {
    setBalance(totalIncome - totalExpense - saving);
  }, [incomes, expenses, saving]);
  const theme = createTheme({
    palette: {
      mode: mode,
      ...(mode === "light"
        ? {
            primary: {
              main: "#1c3738",
            },
            secondary: {
              main: "#8baaad",
            },
            text: {
              primary: "#8baaad",
              secondary: "#1c3738",
            },
            background: {
              default: "#f4fff8",
            },
          }
        : {
            primary: {
              main: "#FCE2DB",
            },
            secondary: {
              main: "#d6bfb0",
            },
            text: {
              primary: "#d6bfb0",
              secondary: "#FCE2DB",
            },
            background: {
              default: "#4d4847",
            },
          }),
    },
  });
  const manageTheme = {
    toggleMode: () => {
      setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
    },
    //only needed if I need to pass some arguments
    incomes,
    expenses,
    setIncomes,
    setExpenses,
    balance,
    setBalance,
  };
  return (
    <ThemeContext.Provider value={manageTheme}>
      <ThemeProvider theme={theme}>
        <Box className="App" sx={{ bgcolor: "background.default" }}>
          <ToggleButton />
          <Grid container justifyContent="center" alignItems="center" padding={3} spacing={7}>
            <Grid item xs="auto">
              <Money option="Income" list={incomes} setList={setIncomes} />
            </Grid>
            <Grid item xs="auto">
              <Money option="Expense" list={expenses} setList={setExpenses} />
            </Grid>
            <Grid item xs="auto">
              <Saving saving={saving} />
            </Grid>
          </Grid>
          <Balance balance={balance} setSaving={setSaving} />
        </Box>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;
