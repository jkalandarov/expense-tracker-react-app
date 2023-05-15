import React, { useState } from 'react';
import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import ExpenseFilter from './ExpenseFilter';

function Expenses(props) {
  const [ filteredYear, setFilteredYear ] = useState('All');
  
  const handleFilterChange = selectedYear => {
    setFilteredYear(selectedYear);
  }

  const itemsToDisplay = filteredYear === 'All' 
    ? props.items.map(item => <ExpenseItem key={item.id} date={item.date} name={item.name} amount={item.amount} />)
    : props.items.filter(item => item.date.getFullYear().toString() === filteredYear)
      .map(item => <ExpenseItem key={item.id} date={item.date} name={item.name} amount={item.amount} />);

  const noExpenseFound = <p>No expense found</p>

  return (
    <div className='expenses'>
      <ExpenseFilter 
        onChangeFilter={handleFilterChange} 
        selectedYear={filteredYear}
      />
      {itemsToDisplay.length === 0 ? noExpenseFound : itemsToDisplay}
    </div>
  )
}

export default Expenses;