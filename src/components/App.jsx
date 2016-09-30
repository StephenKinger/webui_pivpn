import React, {Component} from 'react';
import { connect } from 'react-redux';
import { IndexLink } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';
import NavBar from 'react-bootstrap/lib/NavBar';
import Nav from 'react-bootstrap/lib/Nav';
import Helmet from 'react-helmet';
import ReactDOM from 'react-dom';

import * as actionCreators from '../action_creators';

export default class AppGuiOpenVPN extends React.Component {
  render() {
      return <div className="titi">
      <Helmet title="OpenVPN front end"/>
      <h1>Hello</h1>
      </div>
  }
}


function mapStateProps(state) {
  return {
    todos: state.get('todos'),
    filter: state.get('filter')
  };
}

export const AppContainer = connect(mapStateProps, actionCreators)(AppGuiOpenVPN);
