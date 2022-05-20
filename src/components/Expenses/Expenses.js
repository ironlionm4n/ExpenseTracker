import './Expenses.css'
import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card'
import { FilterExpenses } from '../Filter/FilterExpenses'
import React, { useState } from 'react'

const Expenses = props => {
  const  [filterYear, setFilterYear] = useState('2022')

  const handleSetFilterYear = (year) => {
    setFilterYear(year)
  }

  return (
    <div>
      <Card className='expenses'>
      <FilterExpenses selectedYear={filterYear} onSelectFilterYear={handleSetFilterYear} />
        {props.expenses.map(expense => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  )
}

export default Expenses
