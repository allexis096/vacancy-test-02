import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import Card from '../pages/Card';
import Extract from '../pages/Extract';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Login} />
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/card" component={Card} />
    <Route path="/extract" component={Extract} />
  </Switch>
);

export default Routes;
