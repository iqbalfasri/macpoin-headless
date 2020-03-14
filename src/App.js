import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Pages
import Home from "./pages/home";
import Post from "./pages/post";

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/post/:id" exact component={Post} />
      </Switch>
    </div>
  </Router>
);

export default App;
