import React, { useState } from 'react';

import './Expenses.css';
import ExpensesFilter from './ExpenseFilter';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';

export default function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2020');

  const expenses = props.expenses.map(expense => {
    return (
      <ExpenseItem date={expense.date} title={expense.title} amount={expense.amount} />
    );
  });

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        {expenses}
      </Card>
    </div>
  );
}
