// Dependencies
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// Styled components
import AppRoot from "./AppRoot";

// Pages
import Home from "../../pages/Home";
import NotFound from "../../pages/NotFound";

function App() {
  return (
    <Router>
      <AppRoot>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route component={NotFound} />
        </Switch>
      </AppRoot>
    </Router>
  );
}

export default App;
