import Expenses from './components/Expenses/Expenses'
import { NewExpense } from './components/ExpenseCreation/NewExpense'
import React, { useState } from 'react'
import INITIAL_EXPENSES from './components/Expenses/InitExpenses'

function App () {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES)

  const handleAddExpense = expense => {
    setExpenses(prevState => {
      return [expense, ...prevState]
    })
  }


  return (
    <div>
      <div>
        <NewExpense
          onAddExpense={handleAddExpense}
        />
        <Expenses expenses={expenses} />
      </div>
    </div>
  )
}

export default App
