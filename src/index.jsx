import React from 'react';
import {Provider} from 'react-redux';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import {syncHistoryWithStore, routerReducer} from 'react-router-redux';
import reducer from './reducer';
import {AppContainer} from './containers/App/App';
import {compose, createStore, combineReducers, applyMiddleware} from 'redux';
import {getRoutes} from './routes'

import {SET_STATE} from './actions/actions_types'

import reduxThunk from 'redux-thunk';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

 const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
// const createStoreDevTools = compose(
//   window.devToolsExtension ? window.devToolsExtension() : f => f
// )(createStore);
// const store = createStoreDevTools(reducer);
// const store = createStore(reducer);
const store =  createStoreWithMiddleware(reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const history = syncHistoryWithStore(hashHistory, store);

store.dispatch({
  type: SET_STATE,
  state: {
    users: [
      { id: '260924094424Z', name: 'pivpn', state: 'Valid',
  									location: 'Paris', email: 'myemail@mail'},
      { id: '1545', name: 'none', state: 'Valid',
                    location: 'Paris', email: 'test@mail'}
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
