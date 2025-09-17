import { Route, Routes } from "react-router-dom";
import Home from "./../Page/Home";
import About from "./../Page/About";
import AccountManagement from "./../Page/AccountManagement";
import DepartmentManagement from "./../Page/DepartmentManagement";
import SignUp from "./../Page/SignUp";
import Login from "./../Page/Login";
import Error from "./../Page/Error";
import AccountDetail from "../Page/AccountDetail";

export let routes = (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/accountmanagement" element={<AccountManagement />} />
    <Route path="/departmentmanagement" element={<DepartmentManagement />} />
    <Route path="/signup" element={<SignUp />} />
    <Route path="/login" element={<Login />} />
    <Route path="/accountDetail/:idParam" element={<AccountDetail />} />
    <Route path="*" element={<Error />} />
  </Routes>
);
