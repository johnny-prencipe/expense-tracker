import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";

export default function ExpenseItem(props) {
  const clickHandler = () => {
    console.log("Clicked!!!");
  };
  return (
    <Card className="expense-item">
      <div className="expense-item__description">
        <ExpenseDate date={props.date} />
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}
