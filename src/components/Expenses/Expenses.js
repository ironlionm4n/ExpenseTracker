import './Expenses.css'
import Card from '../UI/Card'
import { FilterExpenses } from '../Filter/FilterExpenses'
import React, { useState } from 'react'
import ExpensesList from './ExpensesList'
import { ExpensesChart } from './ExpensesChart'

const Expenses = props => {
  const [filterYear, setFilterYear] = useState('2021')

  const handleSetFilterYear = year => {
    setFilterYear(year)
  }
  const filteredExpenses = props.expenses.filter(expense => {
    console.log(expense.date.getFullYear(), filterYear)
    return expense.date.getFullYear().toString() === filterYear
  })

  return (
    <div>
      <Card className='expenses'>
        <FilterExpenses
          selectedYear={filterYear}
          onSelectFilterYear={handleSetFilterYear}
        />
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList expenses={filteredExpenses}/>
      </Card>
    </div>
  )
}

export default Expenses
