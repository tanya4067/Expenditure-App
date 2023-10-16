import Card from './Card';
import './ExpenseItems.css';
function ExpenseDates(props)
{   const month=props.date.date.toLocaleString('en-US',{month:'long'});
    const weekday=props.date.date.toLocaleString('en-US',{weekday:'long'});
    const year=props.date.date.toLocaleString('en-US',{year:'numeric'});
    return(
        <Card className='expense-date'>
            <div className='expense-date__month'>{month}</div>
            <div className='expense-date__day'>{weekday}</div>
            <div className='expense-date__year'>{year}</div>
        </Card>
    );
}
export default ExpenseDates;