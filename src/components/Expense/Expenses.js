import React, { useState } from 'react';
import './Expenses.css';
import ExpenseFilter from './ExpenseFilter';
import ExpensesList from './ExpensesList';

function Expenses(props) {
  const [ filteredYear, setFilteredYear ] = useState('All');
  
  const handleFilterChange = selectedYear => {
    setFilteredYear(selectedYear);
  }

  const itemsToDisplay = filteredYear === 'All' 
    ? props.items
    : props.items.filter(item => item.date.getFullYear().toString() === filteredYear);

  return (
    <div className='expenses'>
      <ExpenseFilter 
        onChangeFilter={handleFilterChange} 
        selectedYear={filteredYear}
      />
      <ExpensesList items={itemsToDisplay} />
    </div>
  )
}

export default Expenses;