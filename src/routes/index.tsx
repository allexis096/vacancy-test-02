import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from '../Login';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Login} />
  </Switch>
);

export default Routes;
