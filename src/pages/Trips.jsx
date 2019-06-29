import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ListPage from 'pages/Trips/List';
import DetailPage from 'pages/Trips/Detail';
import * as ROUTES from '../constants/routes';

export default () => (
  <Switch>
    <Route path={ROUTES.TRIPS_LIST} component={ListPage} />
    <Route exact path={ROUTES.TRIPS_DETAIL} component={DetailPage} />
  </Switch>
);
