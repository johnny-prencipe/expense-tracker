import React from "react";

import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";

export default function Expenses(props) {
  const expenses = props.expenses.map((expense, index) => {
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
