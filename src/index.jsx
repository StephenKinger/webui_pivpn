import React from 'react';
import {Provider} from 'react-redux';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import {syncHistoryWithStore, routerReducer} from 'react-router-redux';
import {reducer} from './reducer';
import {AppContainer} from './containers/App/App';
import {compose, createStore, combineReducers} from 'redux';
import {getRoutes} from './routes'

const createStoreDevTools = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore);
// const store = createStoreDevTools(reducer);
const store = createStore(combineReducers({reducer, routing: routerReducer}));

const history = syncHistoryWithStore(hashHistory, store);


ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      {getRoutes(store)}
    </Router>
  </Provider>,
  document.getElementById('app')
);

if (process.env.NODE_ENV !== 'production') {
  window.React = React; // enable debugger
}

if (!window.devToolsExtension) {
  console.log("coucou")
  const DevTools = require('./containers/DevTools/DevTools');
  ReactDOM.render(
    <Provider store={store} key="provider">
      <div>
        <AppContainer/>
        <DevTools />
      </div>
    </Provider>,
    dest
  );
}
