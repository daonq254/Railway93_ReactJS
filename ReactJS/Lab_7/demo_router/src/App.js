import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./Page/Home";
import About from "./Page/About";
import AccountManagement from "./Page/AccountManagement";
import DepartmentManagement from "./Page/DepartmentManagement";
import SignUp from "./Page/SignUp";
import Login from "./Page/Login";
function App() {
  return (
    <div className="App">
      {/* Menu*/}
      <div className="container">
        <nav className="navbar navbar-inverse" style={{ backgroundColor: "black", color: "black" }}>
          <div className="container-fluid">
            <ul class="nav navbar-nav">
              <li>
                <Link to="/">VTI ACADEMY</Link>
              </li>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/accountmanagement">AccountManagement</Link>
              </li>
              <li>
                <Link to="/departmentmanagement">DepartmentManagement</Link>
              </li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li>
                <Link to="/signup">
                  <span className="glyphicon glyphicon-user"></span> Sign Up
                </Link>
              </li>
              <li>
                <Link to="/login">
                  <span className="glyphicon glyphicon-log-in"></span> Login
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      {/*  */}
      {/* Khai báo ra bảng định tuyến */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/accountmanagement" element={<AccountManagement />} />
        <Route path="/departmentmanagement" element={<DepartmentManagement />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>

    //
  );
}

export default App;
