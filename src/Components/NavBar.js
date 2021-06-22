import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/transactions">Transactions</NavLink>
        <NavLink to="/transactions/new">Log New Transactions</NavLink>
      </nav>
    </div>
  );
};

export default NavBar;
