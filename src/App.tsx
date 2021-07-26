import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import { AuthContextProvider } from "./contexts/AuthContext";
import { Header } from './layouts/Header';
import { Detail } from './pages/Detail';
import { List } from './pages/List';
import { Login } from './pages/Login';
import { PrivateRoute } from "./pages/PrivateRoute";

function App() {
  return (
    <Router>
      <AuthContextProvider>
        {/* TODO create a layout component and put header inside */}
        <Route path="*" component={Header} />
        <Switch>
          <PrivateRoute path="/list/:id"><Detail /></PrivateRoute>
          <PrivateRoute path="/list"><List /></PrivateRoute>
          <Route path="/login" component={Login} />
          <Redirect from="*" to="/login" />
        </Switch>
        {/* TODO crate a footer component */}
      </AuthContextProvider>
    </Router>
  );
}

export default App;
