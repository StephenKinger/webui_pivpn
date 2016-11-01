import React, {Component, PropTypes} from 'react';
import Helmet from 'react-helmet';
import {connect} from 'react-redux';

export default class Widgets extends Component {

  handleEdit() {
    console.log("hello handle")
  }


  render() {
    const styles = require('./Status.scss');
    return (
      <div className="container">
        <h1>Not Implemented Yet!</h1>
      </div>
    )
  }
}
