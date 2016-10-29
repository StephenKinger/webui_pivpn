import React, {Component} from 'react';
import NavItem from 'react-bootstrap/lib/NavItem';
import Service from '../../components/Service/Service';


export default class StartStopService extends React.Component {
  constructor(props) {
    super(props);
    this.state = {power: 'on'};
    console.log(this.props);
  }

  toggleStatus() {
    if (this.state.power == 'on') {
      console.log("passage a off");
      this.setState({power: 'off'});
    }
    else {
      console.log("passage a on");
      this.setState({power: 'on'});
    }
  }

  render () {
    if (this.state.power == 'on') {
      console.log("render a on");
      return <Service serviceState={true} toggleService={this.toggleStatus.bind(this)}/>
    }
    else {
      console.log("render a off");
      return <Service serviceState={false} toggleService={this.toggleStatus.bind(this)}/>
    }
  }
}
