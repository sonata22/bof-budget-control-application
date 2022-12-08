//Types of Income and Expenses field inputs
export interface MoneyItem {
  title: string;
  amount: number;
  date: string;
  // "?" means optional item
  id?: number;
}

//Income and Expense form's props types
export interface MoneyProps {
  option: "Income" | "Expense";
  list: MoneyItem[];
  //setList: (value: MoneyItem[]) => void;
  setList: React.Dispatch<React.SetStateAction<MoneyItem[]>>;
}
