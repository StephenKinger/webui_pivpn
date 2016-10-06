import React, {Component} from 'react';
import NavItem from 'react-bootstrap/lib/NavItem';

export default class ServiceStarted extends React.Component {

  render () {
    return <NavItem onSelect={ this.props.toggleService } title="Stop">
    <i className="fa fa-power-off" color="green"/>
    </NavItem>
  }
}
