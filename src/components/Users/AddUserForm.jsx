import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Form from 'react-bootstrap/lib/Form';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import Col from 'react-bootstrap/lib/Col';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormControl from 'react-bootstrap/lib/FormControl';
import Button from 'react-bootstrap/lib/Button';

export default class AddUserForm extends Component {
  constructor(props) {
  super(props);
    this.state = {
      'formHorizontalName': '',
      'formHorizontalEmail': '',
      'formHorizontalPassword': '',
      'formHorizontalPlace': ''
      }
  }

  _handleValidSubmit(e) {
    console.log('handle');
    if (e) {
           e.preventDefault();
       }

    //TODO send a post to an API.
  }

  getValues() {
      return Object.keys(this._inputs).reduce((values, name) => {
          values[name] = this._getValue(name);

          return values;
      }, {});
  }

  onChange(evt) {
    if (evt.target.id == 'formHorizontalName')
      this.setState({ 'formHorizontalName' :  evt.target.value});
    if (evt.target.id == 'formHorizontalEmail')
      this.setState({ 'formHorizontalEmail' :  evt.target.value});
    if (evt.target.id == 'formHorizontalPassword')
      this.setState({ 'formHorizontalPassword' :  evt.target.value});
    if (evt.target.id == 'formHorizontalPlace')
      this.setState({ 'formHorizontalPlace' :  evt.target.value});

  }

  render() {
    return (
      <Form horizontal onSubmit={this._handleValidSubmit.bind(this)}>
        <FormGroup controlId="formHorizontalName">
          <Col componentClass={ControlLabel} sm={2}>
            Name
          </Col>
          <Col sm={10}>
            <FormControl type="text" placeholder="Name" onChange={this.onChange.bind(this)} />
          </Col>
        </FormGroup>
        <FormGroup controlId="formHorizontalEmail">
          <Col componentClass={ControlLabel} sm={2}>
            Email
          </Col>
          <Col sm={10}>
            <FormControl type="email" placeholder="Email" onChange={this.onChange.bind(this)} />
          </Col>
        </FormGroup>

        <FormGroup controlId="formHorizontalPassword" >
          <Col componentClass={ControlLabel} sm={2}>
            Password
          </Col>
          <Col sm={10}>
            <FormControl type="password" placeholder="Password" onChange={this.onChange.bind(this)} />
          </Col>
        </FormGroup>

        <FormGroup controlId="formHorizontalPlace">
          <Col componentClass={ControlLabel} sm={2}>
            Place
          </Col>
          <Col sm={10}>
            <FormControl type="text" placeholder="Place" onChange={this.onChange.bind(this)} />
          </Col>
        </FormGroup>

        <FormGroup>
          <Col smOffset={2} sm={10}>
            <Button type="submit">
              Add
            </Button>
          </Col>
        </FormGroup>
      </Form>
    );
  }
}
