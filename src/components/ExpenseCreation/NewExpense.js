import React from 'react'
import { InputForm } from './InputForm'
import './NewExpense.css'

export const NewExpense = (props) => {
  const handleSaveExpenseData = (inputFormData) => {
    const newExpenseData = {
      ...inputFormData,
      id: Math.random().toString()
    }
    props.onAddExpense(newExpenseData)
  }



  return (
    <div className='new-expense'>
    {/* onSaveExpenseData will take a function and be used to lift state up from InputForm */}
        <InputForm onSaveExpenseData={handleSaveExpenseData} handleToggleInputForm={props.handleToggleInputForm}/>
    </div>
  )
}
