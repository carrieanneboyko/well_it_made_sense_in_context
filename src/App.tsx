import React from "react";
import "./App.css";
import SimpleCounter from "./components/SimpleCounter/SimpleCounter";
import SimpleCounterWithHook from "./components/SimpleCounter/SimpleCounterWithHook";
import ThreeSimpleCounters from "./components/SimpleCounter/ThreeSimpleCounters";
import ThreeConnectedCounters from "./components/SimpleCounter/ThreeConnectedCounters";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ComponentUsesViewport from "./components/ComponentUsesViewport/ComponentUsesViewport";
import ComponentUsesMultipleViewports from "./components/ComponentUsesViewport/ComponentUsesMultipleViewports";

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
              <li>
                <Link to="/component-uses-viewport-multiple">
                  Multiple uses of useViewport hook
                </Link>
              </li>
              <li>
                <Link to="/simple-counter-with-custom-hook">
                  Simple Counter using Custom Hook
                </Link>
              </li>
              <li>
                <Link to="/three-simple-counters">
                  Three independent counters
                </Link>
              </li>
              <li>
                <Link to="/three-connected-counters">
                  Three connected counters
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
            <Route path="/component-uses-viewport-multiple">
              <ComponentUsesMultipleViewports />
            </Route>
            <Route path="/simple-counter-with-custom-hook">
              <SimpleCounterWithHook />
            </Route>
            <Route path="/three-simple-counters">
              <ThreeSimpleCounters />
            </Route>
            <Route path="/three-connected-counters">
              <ThreeConnectedCounters />
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
