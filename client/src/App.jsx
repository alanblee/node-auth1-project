import React from "react";
import { Route, Switch } from "react-router-dom";
import LoginPage from "./pages/authPage/loginPage";
import RegisterPage from "./pages/authPage/registerPage";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={LoginPage} />
      <Route exact path="/register" component={RegisterPage} />
    </div>
  );
}

export default App;
