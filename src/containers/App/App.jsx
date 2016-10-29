import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import { IndexLink } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import Helmet from 'react-helmet';
import ReactDOM from 'react-dom';
import StartStopService from '../ServiceContainer/StartStopService'

import * as actions from '../../actions/service_actions';

export default class AppGuiOpenVPN extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const styles = require('./App.scss');
    console.log("styles:"+styles);
    return (
      <div className="app">
      <Helmet title="OpenVPN front end"/>
      <Navbar fixedTop>
          <Navbar.Header>
            <Navbar.Brand>
              <IndexLink to="/" activeStyle={{color: '#33e0ff'}}>
                <div className={styles.brand}/>
                <span>WebUI for OpenVPN server management</span>
              </IndexLink>
            </Navbar.Brand>
            <Navbar.Toggle/>
          </Navbar.Header>

          <Navbar.Collapse>
            <Nav navbar>
              <LinkContainer to="/status">
                <NavItem>Status</NavItem>
              </LinkContainer>

              <LinkContainer to="/users">
                <NavItem>Users</NavItem>
              </LinkContainer>
              <LinkContainer to="/about">
                <NavItem>About</NavItem>
              </LinkContainer>
            </Nav>
            <p className={styles.loggedInMessage + ' navbar-text'}>Logged in as <strong>Anonymous</strong>.</p>
            <Nav navbar pullRight>
              <StartStopService serviceState={this.props.serviceState} serviceToggle={this.props.toggleService}/>
              <NavItem target="_blank" title="View on Github" href="https://github.com/erikras/react-redux-universal-hot-example">
                <i className="fa fa-github"/>
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div className={styles.appContent}>
          {this.props.children}
        </div>
        <div className="well text-center">
          Have questions? Ask for help <a
          href="https://github.com/erikras/react-redux-universal-hot-example/issues"
          target="_blank">on Github</a> or in the <a
          href="https://discord.gg/0ZcbPKXt5bZZb1Ko" target="_blank">#react-redux-universal</a> Discord channel.
        </div>
      </div> )
  }
}
//
// AppGuiOpenVPN.propTypes = {
//   serviceState: React.PropTypes.bool,
//   users: React.PropTypes.array,
//   auth:  React.PropTypes.bool
// };
// AppGuiOpenVPN.defaultProps = { serviceState: false };


function mapStateProps(state) {
  return {
    serviceState: state.service.get('serviceState'),
    users: state.service.get('users'),
    auth : state.service.get('auth')
  };
}

export const AppContainer = connect(mapStateProps, actions)(AppGuiOpenVPN);
