import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import { Header } from './layouts/Header';
import { Detail } from './pages/Detail';
import { List } from './pages/List';
import { Login } from './pages/Login';

function App() {
  return (
    <Router>
      {/* TODO create a layout component and put header inside */}
      <Route path="*" component={Header} />
      <Switch>
        <Route path="/list/:id" component={Detail} />
        <Route path="/list" component={List} />
        <Route path="/login" component={Login} />
        <Redirect from="*" to="/login" />
      </Switch>
    </Router>
  );
}

export default App;
