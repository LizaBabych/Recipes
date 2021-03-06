import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import history from "./history";
import Bucket from "./pages/Bucket";
import Dish from "./pages/Dish";

const App = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/dish/:id" exact component={Dish} />
        <Route path="/" exact component={Home} />
        <Route path="/bucket" exact component={Bucket} />
      </Switch>
    </Router>
  );
};

export default App;
