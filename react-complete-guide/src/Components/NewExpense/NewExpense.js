import React, { useState } from 'react'
import ExpenseForm from './ExpenseForm'

import './NewExpense.css'

const NewExpense = (props) => {
    const [addNew, setAddNew] = useState(false)

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const data = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        // console.log(data);
        props.onAddExpense(data)
        setAddNew(false)
    }

    const addNewExpenseHandler = () => {
        setAddNew(true)
    }

    const closeNewExpense = () => {
        setAddNew(false)
    }

    
    return(
        <div className='new-expense'>
            {!addNew && <button onClick={addNewExpenseHandler}>Add New Expense</button>}
            {addNew && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={closeNewExpense} /> }
        </div>
    )
}

export default NewExpense;