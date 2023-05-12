import React from "react";
import Expenses from "./components/Expense/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const expenses = [
  {
    date: { month: 'May', day: 1, year: 2023 }, name: 'Car insurance', amount: 295.75
  },
  {
    date: { month: 'May', day: 2, year: 2023 }, name: 'Groceries', amount: 92.16
  },
];

function App() {
  return (
    <div className="App">
      <h2>Expense Tracker</h2>
      <NewExpense />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
