import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { apiURL } from "../Util/apiURL";

const API = apiURL();

function NewTransaction() {
  const [newTransaction, setNewTransaction] = useState({
    name: "",
    date: "",
    from: "",
    amount: 0,
  });
  let history = useHistory();

  const handleChange = (e) => {
    setNewTransaction({
      ...newTransaction,
      [e.target.id]: e.target.value,
    });
  };

  const createTransaction = async () => {
    try {
      const res = await axios.post(`${API}/transactions`, newTransaction);
      history.push("/transactions");
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createTransaction();
  };

  return (
    <div id="new-transactions">
      {console.log(NewTransaction.amount)}
      <h2>Add A New Item</h2>
      <form id="new-input-form" onSubmit={handleSubmit}>
        <label htmlFor="date">Date</label>
        <input
          id="date"
          placeholder="Date:MM DD  Ex: May 12"
          value={newTransaction.date}
          onChange={handleChange}
          type="date"
        />
        <label htmlFor="name">Name</label>{" "}
        <input
          id="name"
          placeholder="Name"
          value={newTransaction.name}
          onChange={handleChange}
        />
        <label htmlFor="amount">Amount</label>{" "}
        <input
          id="amount"
          type="number"
          placeholder="Amount"
          value={newTransaction.amount}
          onChange={handleChange}
        />
        <label htmlFor="from">From</label>
        <input
          id="from"
          placeholder="From"
          value={newTransaction.from}
          onChange={handleChange}
        />
        <input type="submit" />
      </form>
    </div>
  );
}

export default NewTransaction;
