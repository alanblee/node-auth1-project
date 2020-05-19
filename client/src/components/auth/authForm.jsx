import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { loginUser, registerUser } from "../../redux/actions/authActions";
import "./authForm.scss";

const AuthForm = ({ authType, loginUser, registerUser }) => {
  const { push } = useHistory();
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

    if (!authType) {
      loginUser(formInput);
    } else if (authType === true) {
      console.log('fure')
      registerUser(formInput, () => {
        push("/users");
      });
    }
  };
  return (
    <div className="auth-container">
      {authType ? <h2>Register</h2> : <h2>Login</h2>}
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
        {authType ? <button>Register</button> : <button>Login</button>}
        {authType ? (
          <Link to="/">Already have an account?</Link>
        ) : (
          <Link to="/register">Don't have an account?</Link>
        )}
      </form>
    </div>
  );
};

const actions = {
  loginUser,
  registerUser,
};
export default connect(null, actions)(AuthForm);
