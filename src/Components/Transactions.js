import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import { apiURL } from "../Util/apiURL";
const API = apiURL();

function Transactions() {
  const [transactionsArray, setTransactionsArray] = useState([]);

  const fetchTransactions = async () => {
    try {
      const res = await axios.get(`${API}/transactions`);
      setTransactionsArray(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const createTotal = (transactionsArray) => {
    let sum = 0;
    transactionsArray.forEach((transaction) => {
      sum += Number(transaction.amount);
    });
    return sum.toLocaleString("us-US", { style: "currency", currency: "USD" });
  };

  useEffect(() => {
    fetchTransactions();
  }, []);
  
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
