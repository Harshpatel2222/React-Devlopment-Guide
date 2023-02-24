import React, {useState} from 'react';
import Card from '../UI/Card';
import ExpensesFilter from './ExpenseFilter';
import ExpensesList from './ExpensesList';
import './Expenses.css'


function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2022')
    
    const onFilterUpdate = (selectedYear) => {
        setFilteredYear(selectedYear)   
    }

    const resultFilterYears = (props.items.filter((item) => {
        return item.date.getFullYear() == filteredYear
    })) 

    return (
        <div>
        <Card className='expenses'>
            <ExpensesFilter selectedYear={filteredYear} onChanegFilter={onFilterUpdate} />
            <ExpensesList items={resultFilterYears} />
        </Card>
        </div>
    )
}

export default Expenses;