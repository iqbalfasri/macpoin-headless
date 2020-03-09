import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Pages
import Home from "./pages/home";

const App = () => (
    <Router>
        <div>
            <Switch>
                <Route exact component={Home} />
            </Switch>
        </div>
    </Router>
);

export default App;
