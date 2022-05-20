import React from 'react'

const AddNewExpenseToggle = (props) => {

    const handleToggleInput = () => {
        props.handleToggleInputForm()
    }

  return (
    <div>
        <button onClick={handleToggleInput}>
            Add New Expense
        </button>
    </div>
  )
}

export default AddNewExpenseToggle