import React from 'react';
import './App.css';
import './Componets/Card/card.css';
import './Componets/Exprensedate/exprensedate.css';
import './Componets/Expense_item/expense_item.css';
import { expenses } from './Componets/Exprenses/expenses.js';


function App() {
  const expenseItems = expenses.map(expense => (
    <div key={expense.id} className="card expense-item">
      <div className="expense-date">
        <div className="expense-date__month">
          {new Date(expense.date).toLocaleString('default', { month: 'long' })}
        </div>
        <div className="expense-date__year">{new Date(expense.date).getFullYear()}</div>
        <div className="expense-date__day">{new Date(expense.date).getDate()}</div>
      </div>
      <div className="expense-item__description">
        <h2>{expense.title}</h2>
        <div className="expense-item__price">${expense.amount}</div>
      </div>
    </div>
  ));

  return (
    <div className="App">
      <h2>My Expenses Template</h2>
      <div className="card expenses">{expenseItems}</div>
    </div>
  );
}


export default App;
