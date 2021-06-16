import React, { useState } from 'react';

import './Expenses.css';
import ExpensesList from './ExpensesList';
import ExpensesFilter from './ExpenseFilter';
import Card from '../UI/Card';

export default function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('All');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.expenses.filter(expense => {
    return (
      expense.date.getFullYear().toString() === filteredYear ||
      filteredYear === 'All'
    );
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
}
