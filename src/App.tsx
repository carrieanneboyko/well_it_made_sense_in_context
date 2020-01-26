import React from "react";
import "./App.css";
import SimpleCounter from "./components/SImpleCounter/SimpleCounter";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ComponentUsesViewport from "./components/ComponentUsesViewport/ComponentUsesViewport";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/simple-counter">Simple Counter using Hooks</Link>
              </li>
              <li>
                <Link to="/component-uses-viewport-single">
                  Single use of useViewport hook
                </Link>
              </li>
              {/* <li>
                <Link to="/users">Users</Link>
              </li> */}
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/simple-counter">
              <SimpleCounter />
            </Route>
            <Route path="/component-uses-viewport-single">
              <ComponentUsesViewport />
            </Route>
            {/* <Route path="/users">
              <Users />
            </Route>
            <Route path="/">
              <Home />
            </Route> */}
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
