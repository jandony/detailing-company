import React from "react";

// Utilities
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Main Components

// Templates
import Home from "./components/templates/Home";
import Single from "./components/templates/Single";
import Search from "./components/templates/Search";
import NotFound from "./components/templates/NotFound";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/DetailingCompany/" component={Home} />
          <Route exact path="/DetailingCompany/:slug" component={Single} />
          <Route
            exact
            path="/DetailingCompany/search/:term"
            component={Search}
          />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
