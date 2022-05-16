import React from 'react';
import { Link, NavLink } from "react-router-dom";
export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">useContex</Link> 
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item"><NavLink activeClassName="active" className="nav-link" to="/"> Home </NavLink></li>
            <li className="nav-item"><NavLink activeClassName="active" className="nav-link" to="/about"> About </NavLink></li>
            <li className="nav-item"><NavLink activeClassName="active" className="nav-link" to="/login"> Login </NavLink></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
