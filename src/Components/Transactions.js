import React from "react";
import { Link } from "react-router-dom";


function Transactions({transactionsArray}) {

  const createTotal = (transactionsArray) => {
    let sum = 0;
    transactionsArray.forEach((transaction) => {
      sum += Number(transaction.amount);
    });
    return sum.toLocaleString("us-US", { style: "currency", currency: "USD" });
  };  
  return (
    <div>
      <h2>Total Transactions: {transactionsArray.length}</h2>
      <h3>Your Current Total is {createTotal(transactionsArray)}</h3>
      <div id="list-heading">
        <p>Date</p>
        <p>Name</p>
        <p>Sender</p>
        <p>Amount</p>
      </div>
      <ul id="transactions-list">
        {transactionsArray.map((transaction, index) => {
          return (
            <li key={transaction.name}>
              <p id="transactions-date">{transaction.date}</p>
              <p id="transactions-name">
                <Link to={`/transactions/${index}`}>{transaction.name}</Link>
              </p>
              <p id="transaction-from">{transaction.from}</p>
              <p id="transaction-amount">
                ${transaction.amount}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Transactions;
