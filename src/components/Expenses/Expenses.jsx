import React, { useState } from 'react';

import './Expenses.css';
import ExpensesFilter from './ExpenseFilter';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';

export default function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filteredExpenses = props.expenses.filter(expense => {
    return (
      expense.date.getFullYear().toString() === filteredYear ||
      filteredYear === 'All'
    );
  });

  const expenses = filteredExpenses.map(expense => {
    console.log(filteredExpenses);
    return (
      <ExpenseItem
        key={expense.id}
        date={expense.date}
        title={expense.title}
        amount={expense.amount}
      />
    );
  });

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  return (
    <div>
      <Card className="expenses">
        {filteredExpenses.length === 0 ? <p>No expenses found</p> : expenses}
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
      </Card>
    </div>
  );
}
