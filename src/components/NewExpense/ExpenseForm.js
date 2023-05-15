import React, { useState } from 'react';
import './ExpenseForm.css';

function ExpenseForm(props) {
  const [ userInput, setUserInput ] = useState({
    name: '',
    date: '',
    amount: ''
  });

  const handleTitleChange = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, name: event.target.value}
    });
  }

  const handleAmountChange = event => {
    setUserInput((prevState) => {
      return { ...prevState, amount: event.target.value}
    });
  }

  const handleDateChange = event => {
    setUserInput((prevState) => {
      return { ...prevState, date: event.target.value}
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSaveExpenseData(userInput);
    setUserInput({ title: '', date: '', amount: '' });
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type='text' onChange={handleTitleChange} value={userInput.title}/>
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input type='number' min="0.01" step="0.01" onChange={handleAmountChange} value={userInput.amount}/>
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input type='date' min="2023-01-01" max="2023-12-31" onChange={handleDateChange} value={userInput.date}/>
        </div>
        <div className='new-expense__actions'>
          <button type='button' onClick={props.onCancel}>Cancel</button>
          <button type='submit'>Add</button>
        </div>
      </div>
    </form>
  )
}

export default ExpenseForm;