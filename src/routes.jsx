import React from 'react';
import {IndexRoute, Route} from 'react-router';
import {
    AppContainer,
    NotFound,
    Home,
    Users,
    Login
  } from './containers';

export function getRoutes(store) {
  /**
   * Please keep routes in alphabetical order
   */
  return (
    <Route path="/" component={AppContainer}>
      { /* Home (main) route */ }
     <IndexRoute component={Home}/>

      { /* Routes */ }
      <Route path="login" component={Login}/>
      <Route path="users" component={Users}/>

      { /* Catch all route */ }
      <Route path="*" component={NotFound} status={404} />
    </Route>
  );
};
