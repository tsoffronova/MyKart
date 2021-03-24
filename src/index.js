import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Home from "./Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/Home" component={Home} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
