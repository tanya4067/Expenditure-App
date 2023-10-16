import logo from './logo.svg';
import './App.css';
import ExpenseItems from './components/ExpenseItems';
import NewExpense from './components/NewExpense';
import Card from './components/Card';
import ExpensesFilter from './components/ExpensesFilter';
import {useState} from 'react';
import ExpensesChart from './components/ExpensesChart';
function App(props) {
  /*const DUMMY_EXPENSES = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date:new Date("2022-03-25"),
    },
    Creating a dummy variable to store all the values in an array
  ]*/
  const [expenses,setExpenses]=useState([]);
  const [year,setYear]=useState("2023");
  
  const onChangeExpenseDataHandler =(expenseData) =>
    {
      setExpenses((prevExpense)=> {
        return([expenseData,...prevExpense]);
      });
    }
  const selectedYear =(selectedYear) =>
  {
     setYear(selectedYear);
  }
  const filteredExpenses = expenses.filter(expense => {
    return expense.date.getFullYear().toString()===year
  })
  return (
    
    <div className="App">
      <NewExpense onChangeExpenseDataHandler={onChangeExpenseDataHandler}/>
      <Card className="expense-box">
      <ExpensesFilter onSelectedYear={selectedYear}></ExpensesFilter>
      <ExpensesChart expenses={filteredExpenses}/>
      {filteredExpenses.length===0 ? "No such expense found ": (filteredExpenses.map(expenses => <ExpenseItems expenses={expenses}/>))}
      
      </Card>
      </div>
    
  );
}

export default App;
