import React, {Component, PropTypes} from 'react';
import Helmet from 'react-helmet';
import {connect} from 'react-redux';
import ButtonGroup from 'react-bootstrap/lib/ButtonGroup';
import Button from 'react-bootstrap/lib/Button';
import AddUserForm from '../../components/Users/AddUserForm';
import {API_URL} from '../../config'

export default class Users extends Component {

  getItems() {
    if (this.props.users) {
      return this.props.users.filter(
        (item) => this.props.filter_state === 'All' || item.get('state') === this.props.filter_state
      );
    }
    return [];
  }

  _handleDownload(user) {
    console.log('handleDownlaod ' + user);
    var name = user.get('name');
    console.log(name);
    window.location.href = API_URL + '/users/' + name;
  }

  _handleEdit() {
    console.log("hello handle")
  }

  // handleAdd() {
  //   this.props.addUser();
  // }

  _handleRevoke(user) {
    console.log('revoque' + user);
  }

  _handleOnFilter(filter) {
    this.props.filter_users(filter);
  }

  clicked(user) {
    console.log("clicked"+{user});
  }


  render() {
    const styles = require('./Users.scss');
    const all_active = (this.props.filter_state == 'All') ? 'active' : '';
    const valid_active = (this.props.filter_state == 'Valid') ? 'active' : '';
    const revoked_active = (this.props.filter_state == 'Revoked') ? 'active' : '';
    return (
      <div className={styles.users + ' container'}>
        <div className={styles.createBtn}>
          <Button bsStyle="primary" onClick={() => this.props.addUser()}>
            <i className="fa fa-plus-circle"/> Create New User
          </Button>
          {this.props.addingUser &&
            <AddUserForm apiCreateUser={this.props.apiCreateUser}/>

          }
          <div className={styles.filtersButtons+' btn-group btn-group-justified'} role="group" aria-label="...">
            <div className="btn-group" role="group">
              <button type="button" className={"btn btn-default "+ all_active} onClick={() => this.props.filter_users('All')}>All</button>
            </div>
            <div className="btn-group" role="group">
              <button type="button" className={"btn btn-default "+ valid_active} onClick={() => this.props.filter_users('Valid')}>Valid</button>
            </div>
            <div className="btn-group" role="group">
              <button type="button" className={"btn btn-default "+ revoked_active} onClick={() => this.props.filter_users('Revoked')}>Revoked</button>
            </div>
          </div>
        </div>

        {this.getItems() &&
        <table className="table table-striped">
          <thead>
          <tr>
            <th className={styles.idCol}>ID</th>
            <th className={styles.nameCol}>Name</th>
            <th className={styles.emailCol}>email</th>
            <th className={styles.locationCol}>Location</th>
            <th className={styles.stateCol}>Status</th>
            <th className={styles.buttonCol1}></th>
            <th className={styles.buttonCol2}></th>
            <th className={styles.buttonCol3}></th>
          </tr>
          </thead>
          <tbody>
            {
              this.getItems().map( user =>
                <tr key={user.get('id')}>
                  <td className={styles.idCol}>{user.get('id')}</td>
                  <td className={styles.nameCol}>{user.get('name')}</td>
                  <td className={styles.emailCol}>{user.get('email')}</td>
                  <td className={styles.locationCol}>{user.get('location')}</td>
                  <td className={styles.stateCol}>{user.get('state')}</td>
                  <td className={styles.buttonCol1}>
                  <Button
                    bsStyle="success"
                      onClick={this._handleDownload.bind(this, user)}>
                    <i className="fa fa-download"/> Download
                  </Button>
                  </td>
                  <td className={styles.buttonCol2}>
                  <Button
                    bsStyle="primary"
                      onClick={this._handleEdit.bind(this, user)}>
                    <i className="fa fa-pencil"/> Edit
                  </Button>
                  </td>
                  <td className={styles.buttonCol3}>
                  <Button
                    bsStyle="danger"
                    disabled={user.get('state') == 'Revoked'}
                    onClick={this._handleRevoke.bind(this, user)}>
                    <i className="fa fa-trash"/> Revoke
                  </Button>
                  </td>
                </tr>
              )
            }
          </tbody>
        </table>}
      </div>
    )
  }
}
