// import logo from "./logo.svg";
import { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "../src/Components/HomePage/HomePage";

import "bootstrap/dist/css/bootstrap.min.css";
import LoginPage from "./Components/Login_SignUp/Login_sign";
import Tkarer from "./Components/Eltkarer/Eltkarer";
import Elgard from "./Components/Elgard/Elgard";
import Elm5zn from "./Components/Elm5zn/Elm5zn";

import Elwardat from "./Components/Eltkarer/Elwardat/Elwardat";
import Elmordeen from "./Components/Elmordeen.js/Elomrdeen";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path="/Home" exact component={HomePage} />
            <Route path="/" exact component={LoginPage} />
            <Route path="/Tkarer" exact component={Tkarer} />
            <Route path="/Elgard" exact component={Elgard} />
            <Route path="/Store" exact component={Elm5zn} />
            <Route path="/Elmordeen" exact component={Elmordeen} />

            <Route path="/Tkarer/Elwardat" exact component={Elwardat} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
