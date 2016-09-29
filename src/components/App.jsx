import React, {Component} from 'react';
import { connect } from 'react-redux';
import { IndexLink } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';
import NavBar from 'react-bootstrap/lib/NavBar';
import Nav from 'react-bootstrap/lib/Nav';
import Helmet from 'react-helmet';
import ReactDOM from 'react-dom';

export default class App extends React.Component {
  render() {
      return
        <div className="App">
          <Helmet/>
          <NavBar fixedTop>
            <NavBarHeader>
              <NavBar.Brand>
                <IndexLink to="/">
                  <span>OpenVPN list of profiles</span>
                </IndexLink>
              </NavBar.Brand>
              <NavBar.Toggle/>
            </NavBarHeader>

          <Navbar.Collapse eventKey={0}>
            <Nav navbar>
              {user && <LinkContainer to="/chat">
                <NavItem eventKey={1}>Chat</NavItem>
              </LinkContainer>}

              <LinkContainer to="/widgets">
                <NavItem eventKey={2}>Widgets</NavItem>
              </LinkContainer>
              <LinkContainer to="/survey">
                <NavItem eventKey={3}>Survey</NavItem>
              </LinkContainer>
              <LinkContainer to="/about">
                <NavItem eventKey={4}>About Us</NavItem>
              </LinkContainer>

              {!user &&
              <LinkContainer to="/login">
                <NavItem eventKey={5}>Login</NavItem>
              </LinkContainer>}
              {user &&
              <LinkContainer to="/logout">
                <NavItem eventKey={6} className="logout-link" onClick={this.handleLogout}>
                  Logout
                </NavItem>
              </LinkContainer>}
            </Nav>
            {user &&
            <p className={styles.loggedInMessage + ' navbar-text'}>Logged in as <strong>{user.name}</strong>.</p>}
            <Nav navbar pullRight>
              <NavItem eventKey={1} target="_blank" title="View on Github" href="https://github.com/erikras/react-redux-universal-hot-example">
                <i className="fa fa-github"/>
              </NavItem>
            </Nav>
          </Navbar.Collapse>

        </NavBar>
        </div>
  }

};
