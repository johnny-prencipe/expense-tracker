import React from "react";

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

export default function App() {
  const expenses = [
    { id: 'e1', date: new Date(2021, 3, 16), title: "Car Insurance", amount: 405.72 },
    { id: 'e2', date: new Date(2021, 3, 15), title: "Phone bill", amount: 80.02 },
    { id: 'e3', date: new Date(2021, 3, 15), title: "Rent", amount: 450.0 },
    { id: 'e4', date: new Date(2021, 3, 14), title: "Groceries", amount: 152.13 },
    { id: 'e5', date: new Date(2021, 3, 13), title: "Liquor", amount: 63.32 },
    { id: 'e6', date: new Date(2021, 2, 31), title: "Rent", amount: 450.0 },
  ];

  const addExpenseHandler = expense => {
    console.log('addExpenseHandler fired from App.jsx');
    console.log(expense);
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}
