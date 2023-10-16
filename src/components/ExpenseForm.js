import './ExpenseItems.css';
import {useState} from 'react';
const ExpenseForm = (props) =>
{   //const [title,setTitle]=useState('');
    //const [amount,setAmount]=useState('');
    //const [price,setPrice]=useState('');
    //Spread operator is used to make a copy of Javascript objects
    const [usrInput,setUsrInput]=useState({
        title:'',
        amount:'',
        date:'',
    });
    const titleChangeHandler=(event) =>
    {
        setUsrInput({
            ...usrInput,
            title:event.target.value,
        })
        //setUsrInput((prevState) => {
          //  return ({...prevState,title:event.target.value});
        //});
        
    };
    const amountChangeHandler=(event) =>
    {
        setUsrInput({
            ...usrInput,
            amount:event.target.value,
        })
        /*setUsrInput((prevState) => {
            return ({...prevState,amount:event.target.value});
        });*/
    };
    const dateChangeHandler=(event) =>
    {
        setUsrInput({
            ...usrInput,
            date:event.target.value,
        })
    };
    const submitHandler = (event) =>
    {
        event.preventDefault();
        const ExpenseData= {
            title:usrInput.title,
            amount:usrInput.amount,
            date:new Date(usrInput.date),
        }
        setUsrInput({title:'',amount:'',date:''});
        props.onSaveExpenseData(ExpenseData);
    }

    return(<form onSubmit={submitHandler}>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input type="text" value={usrInput.title} onChange={titleChangeHandler}/>
            </div>
            <div className='new-expense__control'>
                <label>Amount</label>
                <input type="number" min="0.01" step="0.01" value={usrInput.amount} onChange={amountChangeHandler}/>
            </div>
            <div className='new-expense__control'>
                <label>Date</label>
                <input type="date" min="2019-01-01" max="2029-01-01" value={usrInput.date} onChange={dateChangeHandler}/>
            </div>
            <div classname="new-expense__actions">
                <button type="submit" >Add Expenses</button>
            </div>
        </div>
    </form>);
}
export default ExpenseForm;
