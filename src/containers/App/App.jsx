import React, {Component, PropTypes} from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import { IndexLink } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import Helmet from 'react-helmet';
import ReactDOM from 'react-dom';
import StartStopService from '../ServiceContainer/StartStopService'

import * as serviceActions from '../../actions/service_actions';
import * as apiActions from '../../actions/api_actions';

export default class AppGuiOpenVPN extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    //this.props.apiStatus();
  }

  handleLogout(){
    console.log('logout');
  }

  componentWillUpdate(nextProps, nextState){
      if (this.props.authToken != nextProps.authToken) {
        apiStatus();
      }
  } 

  render() {
    const styles = require('./App.scss');
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
                <NavItem>
                  <i className="fa fa-tachometer"/> Status
                </NavItem>
              </LinkContainer>

              <LinkContainer to="/users">
                <NavItem>
                  <i className="fa fa-users"/> Users
                </NavItem>
              </LinkContainer>
              <LinkContainer to="/about">
                <NavItem>
                  <i className="fa fa-info-circle"/> About
                </NavItem>
              </LinkContainer>
              {!this.props.authToken &&
              <LinkContainer to="/login">
                <NavItem eventKey={5}>Login</NavItem>
              </LinkContainer>}
              {this.props.authToken &&
              <LinkContainer to="/logout">
                <NavItem eventKey={6} className="logout-link" onClick={this.handleLogout.bind(this)}>
                  Logout
                </NavItem>
              </LinkContainer>}
            </Nav>
            {this.props.authToken &&
            <p className={styles.loggedInMessage + ' navbar-text'}>Logged in as <strong>Anonymous</strong>.</p>
            }
            <Nav navbar pullRight>
              <StartStopService serviceState={this.props.serviceState} toggleService={this.props.toggleService}/>
              <NavItem target="_blank" title="View on Github" href="https://github.com/erikras/react-redux-universal-hot-example">
                <i className="fa fa-github"/>
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div className={styles.appContent}>
          {React.cloneElement(this.props.children, this.props)}
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


function mapStateProps(state) {
  return {
    serviceState: state.service.get('serviceState'),
    users: state.service.get('users'),
    auth : state.service.get('auth'),
    filter_state: state.service.get('filter_state'),
    addingUser: state.service.get('addingUser'),
    authToken: state.service.get('authToken')
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Object.assign({}, serviceActions,apiActions), dispatch)
}

export const AppContainer = connect(mapStateProps, mapDispatchToProps)(AppGuiOpenVPN);
