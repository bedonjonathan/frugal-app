import React from "react";
import { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
//IMPORTING COMPONENTS
import Navbar from "./Components/NavBar"
import Transactions from "./Components/Transactions";
import NewTransaction from "./Components/NewTransaction";
import Show from "./Components/Show";
import Home from "./Components/Home"
//DEPENDENCIES
import axios from "axios";
import './App.css';
import { apiURL } from "./Util/apiURL";
const API = apiURL();


function App() {
  const [transactionsArray, setTransactionsArray] = useState([]);

  const fetchTransactions = async () => {
    try {
      const res = await axios.get(`${API}/transactions`);
      setTransactionsArray(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  const deleteTransaction = async (index) => {
    try {
      await axios.delete(`${API}/transactions/${index}`);
      const dummyState = [...transactionsArray];
      dummyState.splice(index, 1);
      setTransactionsArray(dummyState);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <div className="App">
      <Navbar></Navbar>
      <main>
      <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/transactions">
            <Transactions transactionsArray={transactionsArray}/>
          </Route>
          <Route exact path="/transactions/new">
            <NewTransaction/>
          </Route>
          <Route exact path="/transactions/:index">
            <Show transactionsArray={transactionsArray} deleteTransaction={deleteTransaction}/>
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
