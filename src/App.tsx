import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Header } from './layouts/Header';
import { Login } from './pages/Login';

function App() {
  return (
    <Router>
      <Route path="*" component={Header} />
      <Switch>
        <Route path="/" component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
