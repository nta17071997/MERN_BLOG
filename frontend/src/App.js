import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./components/screens/Home";
import Category from "./components/screens/Category";
import Single from "./components/screens/Single";
import NotFound from "./components/screens/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/category">
          <Category />
        </Route>
        <Route exact path="/single">
          <Single />
        </Route>
        <Route exact path="*">
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
