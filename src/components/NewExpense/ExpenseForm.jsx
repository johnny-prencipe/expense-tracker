import React, { useState } from 'react';

import './ExpenseForm.css';

export default function ExpenseForm() {
  // State handlers for input form
  const [enteredTitle, setEnteredTitle]   = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate]     = useState('');

  const titleChangeHandler  = event => setEnteredTitle(event.target.value);
  const amountChangeHandler = event => setEnteredAmount(event.target.value);
  const dateChangeHandler   = event => setEnteredDate(event.target.value);

  // const [userInput, setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: '',
  // });

  // const titleChangeHandler = event => {
  //   // setUserInput({
  //   //   ...userInput,
  //   //   enteredTitle = event.target.value
  //   // });
  //   setUserInput(prevState => {
  //     return { ...prevState, enteredTitle: event.target.value }
  //   });
  // };
  // const amountChangeHandler = event => {
  //   setUserInput({
  //     ...userInput,
  //     enteredAmount = event.target.value
  //   });
  // };
  // const dateChangeHandler = event => {
  //   setUserInput({
  //     ...userInput,
  //     enteredDate = event.target.value
  //   });
  // }

  return (
    <form autoComplete="off">
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            name="title"
            id="title"
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            name="amount"
            id="amount"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            name="date"
            id="date"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}
