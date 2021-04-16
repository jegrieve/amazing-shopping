import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import Navbar from './components/Navbar';

const Routes = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Homepage} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
