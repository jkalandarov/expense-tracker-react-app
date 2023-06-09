import React, { useState } from "react";
import Expenses from "./components/Expense/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const expenses = [
  {
    id: 'e1',
    name: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2021, 7, 14),
  },
  { id: 'e2', name: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    name: 'Car Insurance',
    amount: 294.67,
    date: new Date(2022, 2, 28),
  },
  {
    id: 'e4',
    name: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2023, 5, 12),
  },
];

function App() {
  const [ intialExpenses, setExpenses ] = useState(expenses);
  const handleAddExpense = expense => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  }
  return (
    <div className="App">
      <h2>Expense Tracker</h2>
      <NewExpense onAddExpense={handleAddExpense}/>
      <Expenses items={intialExpenses} />
    </div>
  );
}

export default App;
