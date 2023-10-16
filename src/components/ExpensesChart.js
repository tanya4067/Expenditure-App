import Chart from "./Chart/Chart";
const ExpensesChart = (props) =>
{
    const chartDataPoints =[
    {lable:'Jan',value:0},
    {lable:'Feb',value:0},
    {lable:'Mar',value:0},
    {lable:'Apr',value:0},
    {lable:'May',value:0},
    {lable:'Jun',value:0},
    {lable:'July',value:0},
    {lable:'Aug',value:0},
    {lable:'Sept',value:0},
    {lable:'Oct',value:0},
    {lable:'Nov',value:0},
    {lable:'Dec',value:0},
    ];
        
            //const expenseMonth=expense.date.getMonth();
            //chartDataPoints[expenseMonth].value +=expense.amount;
            for (const expense in props.expenses)
            {
                const expenseMonth=props.expenses[expense].date.getMonth();
                
                //chartDataPoints[expenseMonth]
                chartDataPoints[expenseMonth]['value']+=parseInt(props.expenses[expense].amount);
            } 
        
    
    return(
        <Chart dataPoints={chartDataPoints}/>
    );

}
export default ExpensesChart;