import './ExpenseDate.css'

const ExpenseDate = props => {
  const monthValue = props.date.toLocaleString('en-US', { month: 'long' })
  const dayValue = props.date.toLocaleString('en-US', { day: '2-digit' })
  //const yearValue = props.date.toLocaleString('en-US', { year: 'numeric' }
  const yearValue = props.date.getFullYear()
  console.log(`Month ${monthValue} Day ${dayValue} Year ${yearValue}`)


  return (
    <div className="expense-date">
      <div className='expense-date_month'>{monthValue}</div>
      <div className="expense-date_day">{dayValue}</div>
      <div className="expense-date_year">{yearValue}</div>
    </div>
  )
}

export default ExpenseDate;