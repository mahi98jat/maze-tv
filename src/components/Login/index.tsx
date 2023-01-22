import React, { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";

const Login: FC = () => {
  const navigate = useNavigate();

  const [username, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  function onSubmit() {
    if (!username) {
      alert("Please enter username");
    }
    if (!password) {
      alert("Please enter password");
    }

    if (username && password) {
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);

      alert("Login Successful");

      navigate("/shows");
    }
  }
  return (
    <div className="login-container">
      <form className="form" onSubmit={onSubmit}>
        <h2>Please login</h2>
        <div className="form-item">
          <label htmlFor="username">User Name</label>
          <input
            type="text"
            name="username"
            placeholder="Enter User Name Here"
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>

        <div className="form-item">
          <label htmlFor="passworkd">Password</label>
          <input
            type="password"
            placeholder="Enter Passwords"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <input type="submit" />
      </form>
    </div>
  );
};

export default Login;
