import './ExpenseItems.css';
function Card(props)
{   
    const classes=' card '+props.className;
    //We are doing this because it is not properly alligned 
    return (<div className={classes}>{props.children}</div>);
}
export default Card;