import React from "react";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import "./Register.css";
const Register = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  return (
    <div className="register-container">
      <form action="">
        <h1>Register</h1>
        <input type="text" placeholder="Username" />
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Password" />
        <Button variant="primary">Register</Button>
      </form>
    </div>
  );
};

export default Register;
