import React from 'react';
import {IndexRoute, Route} from 'react-router';
import {
    App,
    NotFound,
    Home,
    About
  } from './containers';

export function getRoutes(store) {
  /**
   * Please keep routes in alphabetical order
   */
  return (
    <Route path="/" component={App}>
      { /* Home (main) route */ }
     <IndexRoute component={Home}/>


      { /* Routes */ }
      <Route path="about" component={About}/>
      { /* <Route path="users" component={Login}/> */ }
      { /* <Route path="about" component={Survey}/> */ }

      { /* Catch all route */ }
      <Route path="*" component={NotFound} status={404} />
    </Route>
  );
};
