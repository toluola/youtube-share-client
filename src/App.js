import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "../src/pages/HomePage";
import LoginPage from "../src/pages/LoginPage";
import SignupPage from "../src/pages/SignupPage";
import SharePage from "../src/pages/SharePage";
import { PrivateRoute } from "./utils/PrivateRoute";
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/signup" component={SignupPage} />
          <PrivateRoute exact path="/share" component={SharePage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
