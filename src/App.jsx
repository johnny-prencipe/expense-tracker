import React from "react";

import logo from "./logo.svg";
import "./App.css";
import ExpenseItem from "./components/Expenses/ExpenseItem";
import Expenses from "./components/Expenses/Expenses";

export default function App() {
  const expenses = [
    { date: new Date(2021, 3, 16), title: "Car Insurance", amount: 405.72 },
    { date: new Date(2021, 3, 15), title: "Phone bill", amount: 80.02 },
    { date: new Date(2021, 3, 15), title: "Rent", amount: 450.0 },
    { date: new Date(2021, 3, 14), title: "Groceries", amount: 152.13 },
    { date: new Date(2021, 3, 13), title: "Liquor", amount: 63.32 },
    { date: new Date(2021, 2, 31), title: "Rent", amount: 450.0 },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses expenses={expenses} />
    </div>
  );
}
