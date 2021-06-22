import React from "react";
import Navbar from "./Components/NavBar"
import Transactions from "./Components/Transactions";
import NewTransaction from "./Components/NewTransaction";
import Show from "./Components/Show";

import { Switch, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <main>
        <Switch>
          <Route exact path="/transactions">
            <Transactions/>
          </Route>
          <Route exact path="/transactions/new">
            <NewTransaction/>
          </Route>
          <Route exact path="/transactions/:index">
            <Show/>
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
