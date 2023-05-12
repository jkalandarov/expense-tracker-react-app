import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import { useState } from 'react';

function ExpenseItem(props) {
  const [ initialName, setName ] = useState(props.name);
  const handleClick = () => {
    setName('Updated details');
  }

  return (
    <div className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{initialName}</h2>
      </div>
      <div className="expense-item__price">${props.amount}</div>
      <button onClick={handleClick}>Edit details</button>
    </div>
  )
}

export default ExpenseItem;