import logo from "./logo.svg";
import "./App.css";
import ExpenseItem from "./components/ExpenseItem";

export default function App() {
  const expenses = [
    { date: new Date(2021, 3, 16), title: "Car Insurance", amount: 405.72 },
    { date: new Date(2021, 3, 15), title: "Phone bill", amount: 80.02 },
    { date: new Date(2021, 3, 15), title: "Rent", amount: 900.0 },
    { date: new Date(2021, 3, 14), title: "Groceries", amount: 152.13 },
    { date: new Date(2021, 3, 13), title: "Liquor", amount: 63.32 },
  ];
  return (
    <div>
      <ExpenseItem
        date={expenses[0].date}
        title={expenses[0].title}
        amount={expenses[0].amount}
      />
      <ExpenseItem
        date={expenses[1].date}
        title={expenses[1].title}
        amount={expenses[1].amount}
      />
      <ExpenseItem
        date={expenses[2].date}
        title={expenses[2].title}
        amount={expenses[2].amount}
      />
      <ExpenseItem
        date={expenses[3].date}
        title={expenses[3].title}
        amount={expenses[3].amount}
      />
      <ExpenseItem
        date={expenses[4].date}
        title={expenses[4].title}
        amount={expenses[4].amount}
      />
    </div>
  );
}
