import Expenses from './components/Expenses/Expenses'
import { NewExpense } from './components/ExpenseCreation/NewExpense'
import React, { useState } from 'react'
import INITIAL_EXPENSES from './components/Expenses/InitExpenses'
import AddNewExpenseToggle from './components/ExpenseCreation/AddNewExpenseToggle'

function App () {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES)
  const [showInputForm, setShowInputForm] = useState(false)

  const handleAddExpense = expense => {
    setExpenses(prevState => {
      return [expense, ...prevState]
    })
  }

  const handleToggleInputForm = () => {
    setShowInputForm(!showInputForm)
  }

  return (
    <div>
      <div>
        {showInputForm ? (
          <NewExpense onAddExpense={handleAddExpense} handleToggleInputForm={handleToggleInputForm}/>
        ) : (
          <AddNewExpenseToggle handleToggleInputForm={handleToggleInputForm} />
        )}
        <Expenses expenses={expenses} />
      </div>
    </div>
  )
}

export default App
