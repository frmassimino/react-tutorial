import './ExpenseItem.css'

//A component in react is a js function

function ExpenseItem() {
    const expenseDate = new Date(2021, 2, 28);
    const expenseTitle = 'House Insurance';
    const expensePrice = 250;
    
    return (
        <div className="expense-item">
        <div>{expenseDate.toISOString()}</div>
        <div className="expense-item__description">
            <h2>{expenseTitle}</h2>
            <div className="expense-item__price">${expensePrice}</div>
        </div>
        </div>
    ); //Function should have 1 root return element
} 

//To use te componenet an export is needed

export default ExpenseItem;
