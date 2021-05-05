import React from "react";

import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "./Card";

export default function Expenses(props) {
  props.expenses.forEach(expense => console.log(expense));
  const expenses = props.expenses.map(expense => {
    return (
      <ExpenseItem
        date={expense.date}
        title={expense.title}
        amount={expense.amount}
      />
    );
  });

  return <Card className="expenses">{expenses}</Card>;
}
