import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./authForm.scss";

const AuthForm = () => {
  const [formInput, setFormInput] = useState({
    username: "",
    password: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormInput({
      ...formInput,
      [name]: value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formInput);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="user-input">
        <input
          type="text"
          name="username"
          value={formInput.username}
          onChange={handleChange}
        />
        <label>Username</label>
      </div>
      <div className="user-input">
        <input
          type="password"
          name="password"
          value={formInput.password}
          onChange={handleChange}
        />
        <label>Password</label>
      </div>
      <button>Sign in</button>
      <Link to="/register">Already have an account?</Link>
    </form>
  );
};

export default AuthForm;
