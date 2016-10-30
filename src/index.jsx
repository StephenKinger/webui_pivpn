import React from 'react';
import {Provider} from 'react-redux';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import {syncHistoryWithStore, routerReducer} from 'react-router-redux';
import reducer from './reducer';
import {AppContainer} from './containers/App/App';
import {compose, createStore, combineReducers} from 'redux';
import {getRoutes} from './routes'

import {SET_STATE} from './actions/actions_types'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

const createStoreDevTools = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore);
// const store = createStoreDevTools(reducer);
// const store = createStore(reducer);
const store = createStore(reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const history = syncHistoryWithStore(hashHistory, store);

store.dispatch({
  type: SET_STATE,
  state: {
    users: [
      { id: '260924094424Z', name: 'pivpn', state: 'Valid',
  									location: 'Paris', email: 'myemail@itsatrap.tech'}
    ],
    serviceState: false,
    auth: false
  }
});

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
