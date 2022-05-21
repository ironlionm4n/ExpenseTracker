import React, { useState } from 'react'
import './InputForm.css'

export const InputForm = props => {
  //   const [titleValue, setTitleValue] = useState('')
  //   const [amountValue, setAmountValue] = useState("")
  //   const [dateValue, setDateValue] = useState("")

  // Depends on previous state, since we need to know previous values for updating only certain values - think spreading previous state inside a new state object
  // use an alternative form for the setUserInput function which uses Previous state and annonymous function\
  // React schedules and batches state updates - using this approch gurantees the latest state snapshot is used
  const [userInput, setUserInput] = useState({
    title: '',
    amount: '',
    date: ''
  })

  const handleTitleChange = event => {
    // setUserInput({
    //     /* spread the pevious state first, then overwrite the key/value pair you desire */
    //     ...userInput,
    //     titleValue: event.target.value,
    // })
    setUserInput(prevState => {
      return { ...prevState, title: event.target.value }
    })
  }

  const handleAmountChange = event => {
    // setUserInput({
    //   /* spread the pevious state first, then overwrite the key/value pair you desire */
    //   ...userInput,
    //   amountValue: event.target.value
    // })
    setUserInput(prevState => {
      return { ...prevState, amount: +event.target.value }
    })
  }

  const handleDateChange = event => {
    // setUserInput({
    //   /* spread the pevious state first, then overwrite the key/value pair you desire */
    //   ...userInput,
    //   dateValue: event.target.value
    // })
    setUserInput(prevState => {
      console.log(userInput.date)
      return { ...prevState, date: new Date(event.target.value) }
    })
  }

  // when a submit button is clicked the browser sends a request to the server that is hosting
  // preventDefault method is built into javascript
  // prevents the default behavior of the request being sent - preventing the page from being reloaded
  const handleSubmit = event => {
    event.preventDefault()
    // this function will be executed in NewExpense component because the pointer to the function is passed as a value of the prop
    props.onSaveExpenseData(userInput)
    //setUserInput({ title: '', amount: '', date: '' })
  }

    const handleCancel = () => {
      props.handleToggleInputForm(false)
    }

  return (
    <form onSubmit={handleSubmit}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input
            type='text'
            value={userInput.title}
            onChange={handleTitleChange}
          />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input
            type='number'
            value={userInput.amount}
            min='0.01'
            step='0.01'
            onChange={handleAmountChange}
          />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input
            type='date'
            value={userInput.date}
            min='2019-01-01'
            max='2022-12-31'
            onChange={handleDateChange}
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='button' onClick={handleCancel}>Cancel</button>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  )
}
