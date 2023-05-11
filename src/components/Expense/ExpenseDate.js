import './ExpenseDate.css';

function ExpenseDate(props) {
  return (
    <div className='expense-date'>
      <div className='expense-date__month'>{props.date.month}</div>
      <div className='expense-date__day'>{props.date.day}</div>
      <div className='expense-date__year'>{props.date.year}</div>
    </div>
  )
}

export default ExpenseDate;