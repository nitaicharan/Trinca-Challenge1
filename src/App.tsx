import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import { AuthContextProvider } from "./contexts/AuthContext";
import { Footer } from "./layouts/Footer";
import { Header } from './layouts/Header';
import { Detail } from './pages/Detail';
import { List } from './pages/List';
import { Login } from './pages/Login';
import { PrivateRoute } from "./pages/PrivateRoute";
import './styles/pages/app.scss';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__background">
        <Router>
          <AuthContextProvider>
            <Switch>
              <PrivateRoute path="/list/:id"><Detail /></PrivateRoute>
              <PrivateRoute path="/list"><List /></PrivateRoute>
              <Route path="/login" component={Login} />
              <Redirect from="*" to="/login" />
            </Switch>
          </AuthContextProvider>
          <Footer />
        </Router>
      </div>
    </div>
  );
}

export default App;
