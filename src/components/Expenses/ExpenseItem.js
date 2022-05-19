import React, { useState } from 'react'
import ExpenseDate from './ExpenseDate'
import './ExpenseItem.css'
import Card from '../UI/Card'

const ExpenseItem = (props) => {

  const [title, setTitle] = useState(props.title);  

  const handleOnClick = () => {
    setTitle("Updated Title");
  }

  return (
    <Card className='expense-item'>
    {/* everythin between the Card component will be available as props.children in Card component */}
      <ExpenseDate date={props.date}/>
      <div className='expense-item_description'>
        <h2>{title}</h2>
        <div className='expense-item_price'>Amount: ${props.amount}</div>
      </div>
      {/* pass a pointer to the function you want to invoke when the button is clicked, ommitting () because then the invocation would occur too early and would no longer occurr when clicking the button */}
      <button onClick={handleOnClick}>Change Title</button>
    </Card>
  )
}

export default ExpenseItem
