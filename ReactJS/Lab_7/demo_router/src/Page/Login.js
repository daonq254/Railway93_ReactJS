import React from "react";
import { useNavigate } from "react-router-dom";
function Login(props) {
  // Khai báo hook:
  let navigate = useNavigate();
  // Khai báo hàm xử lý sự kiện khi nhấn nút login
  let handleLogin = () => {
    // Call API login
    // Chuyển về trang quản lý Account
    navigate("/accountmanagement");
  };
  return (
    <>
      <div className="container" style={{ width: "70%" }}>
        <div className="row">
          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <br />
            <br />
            <br />
            <h3>LOGIN</h3>
            <br />
            <div className="form-group">
              <label htmlFor="Email">Email:</label>
              <input type="email" className="form-control" placeholder="Enter email" />
            </div>
            <div className="form-group">
              <label htmlFor="Password">Password:</label>
              <input type="Password" className="form-control" placeholder="Enter Password" />
            </div>
            <button type="button" className="btn btn-info" onClick={handleLogin}>
              Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
