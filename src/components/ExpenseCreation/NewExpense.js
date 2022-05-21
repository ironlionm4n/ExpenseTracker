import React, { useState } from 'react'
import { InputForm } from './InputForm'
import './NewExpense.css'

export const NewExpense = props => {
  const [toggleInputForm, setToggleInput] = useState(false)

  const handleSaveExpenseData = inputFormData => {
    const newExpenseData = {
      ...inputFormData,
      id: Math.random().toString()
    }
    props.onAddExpense(newExpenseData)
    handleToggleInput()
  }

  const handleToggleInput = () => {
    setToggleInput(!toggleInputForm)
  }

  return (
    <div className='new-expense'>
      {!toggleInputForm && (
        <button onClick={handleToggleInput}>Add New Expense</button>
      )}
      {/* onSaveExpenseData will take a function and be used to lift state up from InputForm */}
      {toggleInputForm && (
        <InputForm
          onSaveExpenseData={handleSaveExpenseData}
          handleToggleInputForm={handleToggleInput}
        />
      )}
    </div>
  )
}
