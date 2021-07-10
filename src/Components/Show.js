import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

import { apiURL } from "../Util/apiURL";
const API = apiURL();

function Show({ deleteTransaction, transactionsArray }) {
  const [transaction, setTransaction] = useState({});

  let { index } = useParams();
  let history = useHistory();

  const fetchTransaction = async () => {
    try {
      const res = await axios.get(`${API}/transactions/${index}`);
      console.log(res.data);
      setTransaction(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = () => {
    deleteTransaction(index);
    history.push("/transactions");
  };

  const handleGoBack = () =>{
    history.push("/transactions");
  }

  useEffect(() => {
    fetchTransaction();
  }, []);

  return (
    <div id="show-component">
      <section id="show-section">
        <section id="transaction-details">
          <div>Name: {transaction ? transaction.name : null}</div>
          <div>Date: {transaction ? transaction.date : null}</div>
          <div> Amount: ${transaction ? transaction.amount : null}</div>
          <div> From: {transaction ? transaction.from : null}</div>
        </section>
        <section id="transaction-options">
          <button onClick={handleGoBack}>Go back</button>
          <button onClick={handleDelete}>Delete</button>
        </section>
      </section>
    </div>
  );
}

export default Show;
