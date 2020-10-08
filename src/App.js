import React from "react";
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

function App() {
  return (
    <React.Fragment>
      <Router>
        <Navbar />
        <Container>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/:pokemon" component={Home} />
          </Switch>
        </Container>
      </Router>
    </React.Fragment>
  );
}

export default App;
