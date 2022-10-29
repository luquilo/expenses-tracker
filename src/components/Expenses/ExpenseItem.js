import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);

//   let newTitle = title === "new title" ? props.title : "new title";

  const clickHandler = () => {
    setTitle(title === "new title" ? props.title : "new title");
    console.log(`${title} is clicked!`);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>marks as read</button>
    </Card>
  );
};

export default ExpenseItem;
