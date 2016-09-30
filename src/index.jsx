import React from 'react';
import {Provider} from 'react-redux';
import ReactDOM from 'react-dom';
import {reducer} from './reducer';
import {AppContainer} from './components/App/App';
import {compose, createStore} from 'redux';

const createStoreDevTools = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore);
const store = createStoreDevTools(reducer);

ReactDOM.render(
  <Provider store={store}>
    <AppContainer/>
  </Provider>,
  document.getElementById('App')
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
