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
import Elmontagat from "./Components/Elmontagat/Elmontagat";
import NoktetElbe3 from './Components/NoktetElbe3/NoktetElbe3'
import Elwardatt from './Components/Elwardat/Elwardat'
import Elhaaalek from './Components/Eltkarer/Elhaaaalek/Elhaalek'
import Elmsaaaref from './Components/Eltkarer/Elmsrooofat/Elmsroooofat'


import Settings from './Components/Settings/Setting'
import Elmsaref from './Components/Elmsaaref/Elmsareef'

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

            <Route path="/Tkarer/elhalek" exact component={Elhaaalek} />
            <Route path="/Tkarer/elmsrofat" exact component={Elmsaaaref} />



            <Route path="/Elmontagat" exact component={Elmontagat} />
            <Route path="/NoktetElbe3" exact component={NoktetElbe3} />
            <Route path="/Elwardat" exact component={Elwardatt} />
            <Route path='/Setting' exact component={Settings}/>
            <Route path='/Elmsaref' exact component={Elmsaref}/>

          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
