import React from "react";
import { Route, Switch } from "react-router-dom";
import AuthForm from "./components/auth/authForm";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={AuthForm} />
    </div>
  );
}

export default App;
