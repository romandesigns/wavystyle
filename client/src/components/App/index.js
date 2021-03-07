// Dependencies
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// Components
import AppRoot from "./AppRoot";
import Navbar from "../Navbar";
import Footer from "../Footer";
// Pages
import Home from "../../pages/Home";
import NotFound from "../../pages/NotFound";

function App() {
  return (
    <Router>
      <AppRoot>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </AppRoot>
    </Router>
  );
}

export default App;
