import React, {Component} from 'react';
import { connect } from 'react-redux';
import { IndexLink } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import Helmet from 'react-helmet';
import ReactDOM from 'react-dom';

import * as actionCreators from '../../action_creators';
require("bootstrap-sass-loader");

export default class AppGuiOpenVPN extends React.Component {
  render() {
    const styles = require('./App.scss');

      return <div className="titi">
      <Helmet title="OpenVPN front end"/>
      <Navbar fixedTop>
          <Navbar.Header>
            <Navbar.Brand>
              <IndexLink to="/" activeStyle={{color: '#33e0ff'}}>
                <div className={styles.brand}/>
                <span>My App</span>
              </IndexLink>
            </Navbar.Brand>
            <Navbar.Toggle/>
          </Navbar.Header>

          <Navbar.Collapse>
            <Nav navbar>
              <LinkContainer to="/chat">
                <NavItem>Chat</NavItem>
              </LinkContainer>}

              <LinkContainer to="/widgets">
                <NavItem>Widgets</NavItem>
              </LinkContainer>
              <LinkContainer to="/survey">
                <NavItem>Survey</NavItem>
              </LinkContainer>
              <LinkContainer to="/about">
                <NavItem>About Us</NavItem>
              </LinkContainer>
            </Nav>
            <p className='Navbar-text'>Logged in as <strong>Anonymous</strong>.</p>}
            <Nav navbar pullRight>
              <NavItem target="_blank" title="View on Github" href="https://github.com/erikras/react-redux-universal-hot-example">
                <i className="fa fa-github"/>
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
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
