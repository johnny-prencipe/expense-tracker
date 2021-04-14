import "./ExpenseItem.css";

function ExpenseItem() {
  return (
    <div className="expense-item">
      <div>April 13 2020</div>
      <div className="expense-item__description">
        <h2>Car Insurance</h2>
        <div className="expense-item__price">$405.89</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
