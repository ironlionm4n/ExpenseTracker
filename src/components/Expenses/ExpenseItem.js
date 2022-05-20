import React from 'react'
import ExpenseDate from './ExpenseDate'
import './ExpenseItem.css'
import Card from '../UI/Card'

const ExpenseItem = props => {
  return (
    <li>
      <Card className='expense-item'>
        {/* everythin between the Card component will be available as props.children in Card component */}
        <ExpenseDate date={props.date} />
        <div className='expense-item_description'>
          <h2>{props.title}</h2>
          <div className='expense-item_price'>Amount: ${props.amount}</div>
        </div>
      </Card>
    </li>
  )
}

export default ExpenseItem
