import React, { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

function NewExpense(props) {
  const [ isEditingMode, setEditingMode ] = useState(false);
  const handleExpenseData = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: ((Math.random() * 100) + 1).toString()
    }
    props.onAddExpense(expenseData);
    setEditingMode(false);
  }
  
  const startEditingMode = () => setEditingMode(true);
  const stopEditingMode = () => setEditingMode(false);

  return (
    <div className='new-expense'>
      {
        !isEditingMode 
          ? <button onClick={startEditingMode}>Add New Expense</button>
          : <ExpenseForm onSaveExpenseData={handleExpenseData} onCancel={stopEditingMode}/>
      }
    </div>
  )
}

export default NewExpense;