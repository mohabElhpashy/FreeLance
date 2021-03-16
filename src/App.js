// import logo from "./logo.svg";
import { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../src/Components/HomePage/HomePage";

import "bootstrap/dist/css/bootstrap.min.css";
import LoginPage from "./Components/Login_SignUp/Login_sign";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path="/Home" exact component={Home} />
            <Route path="/" exact component={LoginPage} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
