import {useState} from 'react';
import './ExpenseItems.css';
import ExpenseDates from './ExpenseDates';
import Card from './Card';
function ExpenseItems(props)
{   const [title,setTitle]=useState(props.title);
    const clickHandler =() =>
    {
        setTitle("Updated on Click");
    }
    return(
        <Card className='expense-item'>
            <ExpenseDates date={props.expenses}/>
            <div className='expense-item__description'>
            <h2>{props.expenses.title}</h2>  
            
            <div className='expense-item__price'>
                {props.expenses.amount}
            </div>
            <button onClick={clickHandler}> Click Me!</button>
            </div>
        </Card>
    );
}
export default ExpenseItems;