import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./App";
import ExampleComponent from "./ExampleComponent";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={App} />
        <Route path="/example-component" component={ExampleComponent} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;