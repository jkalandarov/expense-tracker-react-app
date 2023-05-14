import React, { useState } from 'react';
import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import ExpenseFilter from './ExpenseFilter';

function Expenses(props) {
  const [ filteredYear, setFilteredYear ] = useState('2023');
  
  const handleFilterChange = selectedYear => {
    setFilteredYear(selectedYear);
  }

  return (
    <div className='expenses'>
      <ExpenseFilter 
        onChangeFilter={handleFilterChange} 
        selectedYear={filteredYear}
      />
      {props.items.map(item => (
        <ExpenseItem 
          date={item.date} 
          name={item.name} 
          amount={item.amount}
        />)
      )}
    </div>
  )
}

export default Expenses;