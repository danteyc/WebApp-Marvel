import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./index.css";
import PageHome from "./PageHome";
import PageCharacter from "./PageCharacter";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <PageHome />
      </Route>
      <Route path="/character/:id">
        <PageCharacter />
      </Route>
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
