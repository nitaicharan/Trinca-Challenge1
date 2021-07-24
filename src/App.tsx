import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import { AuthContextProvider } from "./contexts/AuthContext";
import { Header } from './layouts/Header';
import { Detail } from './pages/Detail';
import { List } from './pages/List';
import { Login } from './pages/Login';

function App() {
  return (
    <Router>
      <AuthContextProvider>
        {/* TODO create a layout component and put header inside */}
        <Route path="*" component={Header} />
        <Switch>
          <Route path="/list/:id" component={Detail} />
          <Route path="/list" component={List} />
          <Route path="/login" component={Login} />
          <Redirect from="*" to="/login" />
        </Switch>
      </AuthContextProvider>
    </Router>
  );
}

export default App;
