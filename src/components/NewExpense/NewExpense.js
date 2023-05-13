import React from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

function NewExpense(props) {
  const handleExpenseData = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: ((Math.random() * 100) + 1).toString()
    }
    props.onAddExpense(expenseData);
  }

  return (
    <div className='new-expense'>
      <ExpenseForm onSaveExpenseData={handleExpenseData}/>
    </div>
  )
}

export default NewExpense;