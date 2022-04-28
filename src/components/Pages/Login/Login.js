import React from "react";
import Button from "react-bootstrap/Button";
import "./Login.css";
const Login = () => {
  return (
    <div className="login-container">
      <form action="">
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="password" />
        <Button variant="primary">Login</Button>
      </form>
    </div>
  );
};

export default Login;
