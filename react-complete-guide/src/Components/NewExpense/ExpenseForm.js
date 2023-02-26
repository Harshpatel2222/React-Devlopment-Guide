import React, {useState} from 'react'

import './ExpenseForm.css'

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('')
    const [enteredAmount, setEnteredAmount] = useState('')
    const [enteredDate, setEnteredDate] = useState('')

    // const [enteredValue, setEnteredValue] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: '',
    // })

    const titleChnageHaldler = (event) => {
        setEnteredTitle(event.target.value)
        // setEnteredValue({
        //     ...enteredValue,
        //     enteredTitle: event.target.value
        // })
    }

    const amountChnageHaldler = (event) => {
        setEnteredAmount(event.target.value)
        // setEnteredValue({
        //     ...enteredValue,
        //     enteredAmount: event.target.value
        // })
    }
       

    const dateChnageHaldler = (event) => {
        setEnteredDate(event.target.value)
        // setEnteredValue({
        //     ...enteredValue,
        //     enteredDate: event.target.value
        // })
    }

    const submitHandler = (event) => {
        event.preventDefault()
        const data = {
            title: enteredTitle ,
            amount: +enteredAmount ,
            date: new Date(enteredDate) ,
        }

        // console.log(data);
        props.onSaveExpenseData(data)
        setEnteredTitle('')
        setEnteredAmount('')
        setEnteredDate('')

    }

    const cancelNewExpenseForm = () => {
        props.onCancel()
    }

    

    return(
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' value={enteredTitle} onChange={titleChnageHaldler} />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' min='0.01' step='0.01' value={enteredAmount} onChange={amountChnageHaldler} />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' min='2019-01-01' max='2024-12-31' value={enteredDate} onChange={dateChnageHaldler} />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button onClick={cancelNewExpenseForm}>Cancel</button>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;