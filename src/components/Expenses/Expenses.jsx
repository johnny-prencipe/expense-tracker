import React, { useState } from 'react';

import './Expenses.css';
import ExpensesFilter from './ExpenseFilter';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';

export default function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('All');

  const filteredExpenses = props.expenses.filter(expense => {
    return (
      expense.date.getFullYear().toString() === filteredYear ||
      filteredYear === 'All'
    );
  });

  let expensesContent = <p>No expenses found</p>;

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map(expense => {
      return (
        <ExpenseItem
          key={expense.id}
          date={expense.date}
          title={expense.title}
          amount={expense.amount}
        />
      );
    });
  }

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {expensesContent}
      </Card>
    </div>
  );
}
