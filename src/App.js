import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "../src/pages/HomePage"
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
