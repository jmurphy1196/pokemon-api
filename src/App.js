import React from "react";
import jwtDecode from "jwt-decode";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
//bootstrap
import { Container } from "reactstrap";
//router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//navbar
import Navbar from "./components/Nav/Navbar";
//pages
import Home from "./pages/home";
import Login from "./pages/login";
import Favorites from "./pages/favorites";
import Signup from "./pages/signup";
//redux
import { Provider } from "react-redux";
import store from "./redux/store";
import { SET_AUTHENTICATED } from "./redux/types";
import { logoutUser } from "./redux/actions/userActions";
//authroute
import AuthRoute from "./util/AuthRoute";

const token = localStorage.getItem("token");

if (token) {
  const decodedToken = jwtDecode(token);
  if (decodedToken.exp * 1000 < Date.now()) {
    store.dispatch(logoutUser());
  } else {
    store.dispatch({ type: SET_AUTHENTICATED });
  }
}

function App({}) {
  return (
    <React.Fragment>
      <Provider store={store}>
        <Router>
          <Navbar />
            <Container className="main-container">
              <Switch>
                <AuthRoute exact path="/favorites" component={Favorites} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={Signup} />
                <Route exact path="/" component={Home} />
                <Route path="/:pokemon" component={Home} />
              </Switch>
            </Container>
         
        </Router>
      </Provider>
    </React.Fragment>
  );
}

export default App;
