import React, {Component} from 'react';
import NavItem from 'react-bootstrap/lib/NavItem';

export default class ServiceStopped extends React.Component {
  render () {
    return <NavItem onClick={ this.props.toggleService } title="Start">
    <i className="fa fa-power-off"/>
    </NavItem>
  }
}
