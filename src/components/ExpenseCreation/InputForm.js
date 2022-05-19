import React, { useState } from 'react'
import './InputForm.css'

export const InputForm = () => {
  //   const [titleValue, setTitleValue] = useState('')
  //   const [amountValue, setAmountValue] = useState("")
  //   const [dateValue, setDateValue] = useState("")

  // Depends on previous state, since we need to know previous values for updating only certain values - think spreading previous state inside a new state object
  // use an alternative form for the setUserInput function which uses Previous state and annonymous function\
  // React schedules and batches state updates - using this approch gurantees the latest state snapshot is used 
  const [userInput, setUserInput] = useState({
    titleValue: '',
    amountValue: '',
    dateValue: ''
  })

  const handleTitleChange = event => {
    console.log('Handle Title Change: ', event.target.value)
    // setUserInput({
    //     /* spread the pevious state first, then overwrite the key/value pair you desire */
    //     ...userInput,
    //     titleValue: event.target.value,
    // })
    setUserInput((prevState) => {
      return { ...prevState, titleValue: event.target.value }
    })
  }

  const handleAmountChange = event => {
    console.log('Handle Amount Change: ', event.target.value)
    // setUserInput({
    //   /* spread the pevious state first, then overwrite the key/value pair you desire */
    //   ...userInput,
    //   amountValue: event.target.value
    // })
    setUserInput((prevState) => {
        return { ...prevState, amountValue: event.target.value }
      })
  }

  const handleDateChange = event => {
    console.log('Handle Date Change: ', event.target.value)
    // setUserInput({
    //   /* spread the pevious state first, then overwrite the key/value pair you desire */
    //   ...userInput,
    //   dateValue: event.target.value
    // })
    setUserInput((prevState) => {
        return { ...prevState, dateValue: event.target.value }
      })
  }

  return (
    <div>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type='text' onChange={handleTitleChange} />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input
            type='number'
            min='0.01'
            step='0.01'
            onChange={handleAmountChange}
          />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input
            type='date'
            min='2019-01-01'
            max='2022-12-31'
            onChange={handleDateChange}
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
      </div>
    </div>
  )
}
