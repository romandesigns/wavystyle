// Dependencies
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// Styled components
import AppRoot from "./AppRoot";

// Pages
import Home from "../../pages/Home";

function App() {
  return (
    <Router>
      <AppRoot>
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </AppRoot>
    </Router>
  );
}

export default App;
