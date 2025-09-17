import React from "react";
import { Link, NavLink } from "react-router-dom";

function Menu(props) {
  return (
    <>
      <nav className="navbar navbar-inverse" style={{ backgroundColor: "black", color: "black" }}>
        <div className="container-fluid">
          <ul class="nav navbar-nav">
            <li>
              <NavLink to="/">VTI ACADEMY</NavLink>
            </li>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/accountmanagement">AccountManagement</NavLink>
            </li>
            <li>
              <NavLink to="/departmentmanagement">DepartmentManagement</NavLink>
            </li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li>
              <NavLink to="/signup">
                <span className="glyphicon glyphicon-user"></span> Sign Up
              </NavLink>
            </li>
            <li>
              <NavLink to="/login">
                <span className="glyphicon glyphicon-log-in"></span> Login
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Menu;
