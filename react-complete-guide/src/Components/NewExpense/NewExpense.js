import React from 'react'
import ExpenseForm from './ExpenseForm'

import './NewExpense.css'

const NewExpense = (props) => {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const data = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        console.log(data);
        props.onAddExpense(data)
    }

    return(
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
        </div>
    )
}

export default NewExpense;