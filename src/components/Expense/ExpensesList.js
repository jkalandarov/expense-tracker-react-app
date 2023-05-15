import React from "react";
import './ExpensesList.css';
import ExpenseItem from "./ExpenseItem";

const ExpensesList = props => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">No expenses found!</h2>
  }

  return (
    <ul className="expenses-list">
      {
        props.items.map(item => <ExpenseItem key={item.id} date={item.date} name={item.name} amount={item.amount} />)
      }
    </ul>
  )
}

export default ExpensesList;