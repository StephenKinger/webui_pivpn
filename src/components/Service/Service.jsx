import React, {Component} from 'react';
import NavItem from 'react-bootstrap/lib/NavItem';

export default class Service extends React.Component {

  render () {

    if (this.props.serviceState === true) {
      var powerStyle = {color: 'green'};
      var powerTitle="Stop";
    }
    else {
      var powerStyle = {color: 'red'};
      var powerTitle="Start";
    }
    return <NavItem onSelect={ this.props.toggleService } title={powerTitle}>
    <i style={powerStyle} className="fa fa-power-off"/>
    </NavItem>
  }
}
