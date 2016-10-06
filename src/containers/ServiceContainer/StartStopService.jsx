import React, {Component} from 'react';
import NavItem from 'react-bootstrap/lib/NavItem';
import ServiceStarted from '../../components/Service/ServiceStarted';
import ServiceStopped from '../../components/Service/ServiceStopped';

export default class StartStopService extends React.Component {
  constructor(props) {
    super(props);
    console.log("coucocssdu")
    this.state = {power: 'on'};
  }

  toggleStatus() {
    console.log("status toggled");
    this.setState({power: 'off'});
  }

  render () {
    if (this.state.power == 'on') {
      console.log('on');
      return <ServiceStarted toggleService={this.toggleStatus.bind(this)}/>
    }
    else {
      console.log('off');
      return <ServiceStopped toggleService={this.toggleStatus.bind(this)}/>
    }
  }
}
