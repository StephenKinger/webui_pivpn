import React from 'react';
import {IndexRoute, Route} from 'react-router';
import {
    AppContainer,
    NotFound,
    Home,
    About,
    Status,
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
      <Route path="about" component={About}/>
      <Route path="status" component={Status}/>
      <Route path="users" component={Users}/>
      { /* <Route path="about" component={Survey}/> */ }

      { /* Catch all route */ }
      <Route path="*" component={NotFound} status={404} />
    </Route>
  );
};
