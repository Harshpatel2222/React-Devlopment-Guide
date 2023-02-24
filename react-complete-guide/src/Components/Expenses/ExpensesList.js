import React from "react";
import ExpenseItem from "./ExpenseItem"
import './ExpensesList.css'

const ExpensesList = (props) => {
    if(props.items.length == 0){
        return <h2 className="expenses-list__fallback"> No expenses found. </h2>
    }

    return(
        <ul className="expenses-list">
            {props.items.map((newItems) => (
            <ExpenseItem
                key={newItems.id}
                title={newItems.title}
                amount={newItems.amount}
                date={newItems.date}
            />
        ))}
        </ul>
    )
}

export default ExpensesList;