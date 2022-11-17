import React, { useState } from "react";
import './ExpenseForm.css';

const ExpenseForm = () => {

    const [title, setTitle] = useState('title')

    

    const titleChangeHandler = (event) => {
        setTitle(event.target.value)
        // console.log(event.target.value)
        console.log(event.target.value)
    }

    return (

        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label htmlFor="">{title}</label>
                    <input type="text" onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label htmlFor="">Amount</label>
                    <input type="number" min="0.01" step="0.01" name="" id="" />
                </div>
                <div className="new-expense__control">
                    <label htmlFor="">Date</label>
                    <input type="date" name="" id="" min="2019-01-01" max="2022-12-31" />
                </div>
            </div>
            <div className="new-expense__actions">
                <button>Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;