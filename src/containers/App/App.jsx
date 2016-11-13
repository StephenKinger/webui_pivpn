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

import * as serviceActions from '../../actions/service_actions';
import * as apiActions from '../../actions/api_actions';

export default class AppGuiOpenVPN extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (this.props.authToken != '') {
      this.props.apiGetUsers();
    }
  }

  componentWillUpdate(nextProps, nextState){
      if (this.props.authToken != nextProps.authToken) {
        this.props.apiGetUsers();
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
                <span>
                  <img src={require('../Home/pivpn_logo.png')}
                  width='20px' height='20px'/>  WebUI for pivpn
                </span>
              </IndexLink>
            </Navbar.Brand>
            <Navbar.Toggle/>
          </Navbar.Header>

          <Navbar.Collapse>
            <Nav navbar>
            {this.props.authToken &&
              <LinkContainer to="/users">
                <NavItem>
                  <i className="fa fa-users"/> Users
                </NavItem>
              </LinkContainer>
            }
              {!this.props.authToken &&
              <LinkContainer to="/login">
                <NavItem eventKey={5}>Login</NavItem>
              </LinkContainer>}
              {this.props.authToken &&
              <LinkContainer to="/login">
                <NavItem eventKey={6} className="logout-link" >
                  Logout
                </NavItem>
              </LinkContainer>}
            </Nav>
            <Nav navbar pullRight>
              <NavItem target="_blank" title="View on Github" href="https://github.com/StephenKinger/webui_pivpn">
                <i className="fa fa-github fa-2x"/>
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div className={styles.appContent}>
          {React.cloneElement(this.props.children, this.props)}
        </div>
        <div className="well text-center">
          Have questions? Ask for help <a
          href="https://github.com/StephenKinger/webui_pivpn/issues"
          target="_blank">on Github.</a>
        </div>
      </div> )
  }
}


function mapStateProps(state) {
  return {
    users: state.service.get('users'),
    filter_state: state.service.get('filter_state'),
    addingUser: state.service.get('addingUser'),
    authToken: state.service.get('authToken'),
    authError: state.service.get('authError')
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Object.assign({}, serviceActions,apiActions), dispatch)
}

export const AppContainer = connect(mapStateProps, mapDispatchToProps)(AppGuiOpenVPN);
