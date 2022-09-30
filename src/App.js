import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Home";

import Create from "./Create";
import Event from "./Event";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/create" exact>
            <Create />
          </Route>
          <Route path="/events" exact>
            <Event />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
