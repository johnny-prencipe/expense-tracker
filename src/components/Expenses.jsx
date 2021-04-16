import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";

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

  return <section className="expenses">{expenses}</section>;
}
