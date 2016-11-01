import React, {Component, PropTypes} from 'react';
import Helmet from 'react-helmet';
import {connect} from 'react-redux';
import ButtonGroup from 'react-bootstrap/lib/ButtonGroup';
import Button from 'react-bootstrap/lib/Button';

export default class Users extends Component {

  getItems() {
    if (this.props.users) {
      return this.props.users.filter(
        (item) => this.props.filter_state === 'All' || item.get('state') === this.props.filter_state
      );
    }
    return [];
  }

  handleEdit() {
    console.log("hello handle")
  }

  handleOnFilter(filter) {
    this.props.filter_users(filter);
  }

  clicked(user) {
    console.log("clicked"+{user});
  }


  render() {
    const styles = require('./Users.scss');
    const handleEdit = (user) => {
      return () => this.clicked(user);
    };
    const handleSelectFilter = (filter_number) => {
      return () => this.handleOnFilter(filter_number);
    };
    const all_active = (this.props.filter_state == 'All') ? 'active' : '';
    const valid_active = (this.props.filter_state == 'Valid') ? 'active' : '';
    const revoked_active = (this.props.filter_state == 'Revoked') ? 'active' : '';
    return (
      <div className={styles.users + ' container'}>
        <div className={styles.createBtn}>
          <Button bsStyle="primary">
          <i className="fa fa-plus-circle"/> Create New User</Button>
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
            <th className={styles.colorCol}>Name</th>
            <th className={styles.ownerCol}>email</th>
            <th className={styles.ownerCol}>Location</th>
            <th className={styles.sprocketsCol}>Status</th>
            <th className={styles.buttonCol}></th>
          </tr>
          </thead>
          <tbody>
            {
              this.getItems().map( user =>
                <tr key={user.get('id')}>
                  <td className={styles.idCol}>{user.get('id')}</td>
                  <td className={styles.colorCol}>{user.get('name')}</td>
                  <td className={styles.ownerCol}>{user.get('email')}</td>
                  <td className={styles.ownerCol}>{user.get('location')}</td>
                  <td className={styles.sprocketsCol}>{user.get('state')}</td>
                  <td className={styles.buttonCol}>
                    <button className="btn btn-primary" onClick={handleEdit(user)}>
                      <i className="fa fa-pencil"/> Edit
                    </button>
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
