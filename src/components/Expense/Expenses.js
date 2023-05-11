import './Expenses.css';
import ExpenseItem from './ExpenseItem';

function Expenses(props) {
  return (
    <div className='expenses'>
      {props.items.map(item => <ExpenseItem date={item.date} name={item.name} amount={item.amount}/>)}
    </div>
  )
}

export default Expenses;