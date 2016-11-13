import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import Helmet from 'react-helmet';


export default class Login extends Component {
  handleSubmit (){
    console.log('handdlesubmit');
    var login = {
      'name': `${this.refs.username.value}`,
      'password': `${this.refs.password.value}`
    }
    console.log(login);
    this.props.apiAuthenticate(login);
  }

  handleLogout(){
    this.props.disconnect();
  }

  render() {
    const {authToken, logout} = this.props;
    const styles = require('./Login.scss');
    return (
      <div className={styles.loginPage + ' container'}>
        <Helmet title="Login"/>
        <h1>Login</h1>
        {!authToken &&
        <div>
          <form className="login-form form-inline" onSubmit={this.handleSubmit.bind(this)}>
            <div className="form-group">
              <input type="text" ref="username" placeholder="Enter the username" className="form-control"/>
              <input type="password" ref="password" placeholder="Enter the password" className="form-control"/>
            </div>
            <button className="btn btn-success" ><i className="fa fa-sign-in"/>{' '}Log In
            </button>
          </form>
          <p>This will login you and get the jwt.</p>
        </div>
        }
        {authToken &&
        <div>
          <p>You are currently logged in.</p>

          <div>
            <button className="btn btn-danger" onClick={this.handleLogout.bind(this)}><i className="fa fa-sign-out"/>{' '}Log Out</button>
          </div>
        </div>
        }
      </div>
    );
  }
}
