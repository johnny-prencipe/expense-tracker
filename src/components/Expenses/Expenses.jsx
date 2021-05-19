import React, { useState } from 'react';

import './Expenses.css';
import ExpensesFilter from './ExpenseFilter';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';

export default function Expenses(props) {
  const [enteredYear, setEnteredYear] = useState();

  const expenses = props.expenses.map(expense => {
    return (
      <ExpenseItem date={expense.date} title={expense.title} amount={expense.amount} />
    );
  });

  return (
    <Card className="expenses">
      <ExpensesFilter onChangeYear={enteredYear} />
      {expenses}
    </Card>
  );
}
