import './ExpenseItems.css';
import ExpenseForm,{ExpenseData} from './ExpenseForm';
const NewExpense = (props) =>
{   const saveExpenseDataHandler = (enteredExpenseData) =>
    {
        const expenseData={
            ...enteredExpenseData,
            id:(Math.floor((Math.random()*10))).toString()
        }
        props.onChangeExpenseDataHandler(expenseData);
    }
    return (<div className="new-expense">
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
    </div>);
};
export default NewExpense;