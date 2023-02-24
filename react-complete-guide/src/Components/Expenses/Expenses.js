import React, {useState} from 'react';
import Card from '../UI/Card';
import ExpensesFilter from './ExpenseFilter';
import ExpenseItem from './ExpenseItem'
import './Expenses.css'


function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2022')

    const onFilterUpdate = (selectedYear) => {
        setFilteredYear(selectedYear)
    }

    return (
        <div>
        <Card className='expenses'>
        <ExpensesFilter selectedYear={filteredYear} onChanegFilter={onFilterUpdate}/>
            <ExpenseItem
                title={props.items[0].title}
                amount={props.items[0].amount}
                date={props.items[0].date}
            ></ExpenseItem>
            <ExpenseItem
                title={props.items[1].title}
                amount={props.items[1].amount}
                date={props.items[1].date}
            ></ExpenseItem>
            <ExpenseItem
                title={props.items[2].title}
                amount={props.items[2].amount}
                date={props.items[2].date}
            ></ExpenseItem>
            <ExpenseItem
                title={props.items[3].title}
                amount={props.items[3].amount}
                date={props.items[3].date}
            ></ExpenseItem>
        </Card>
        </div>
    )
}

export default Expenses;