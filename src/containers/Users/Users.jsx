import React, {Component, PropTypes} from 'react';
import Helmet from 'react-helmet';
import {connect} from 'react-redux';

export default class Users extends Component {

  handleEdit() {
    console.log("hello handle")
  }


  render() {
    const styles = require('./Users.scss');
    return (
      <div className={styles.users + ' container'}>
      <div className={styles.filtersButtons+' btn-group btn-group-justified'} role="group" aria-label="...">
        <div className="btn-group" role="group">
          <button type="button" className="btn btn-default">Left</button>
        </div>
        <div className="btn-group" role="group">
          <button type="button" className="btn btn-default">Middle</button>
        </div>
        <div className="btn-group" role="group">
          <button type="button" className="btn btn-default">Right</button>
        </div>
      </div>
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
              this.props.users.map( user =>
                <tr key={user.get('id')}>
                  <td className={styles.idCol}>{user.get('id')}</td>
                  <td className={styles.colorCol}>{user.get('name')}</td>
                  <td className={styles.ownerCol}>{user.get('email')}</td>
                  <td className={styles.ownerCol}>{user.get('location')}</td>
                  <td className={styles.sprocketsCol}>{user.get('state')}</td>
                  <td className={styles.buttonCol}>
                    <button className="btn btn-primary" onClick={this.handleEdit()}>
                      <i className="fa fa-pencil"/> Edit
                    </button>
                  </td>
                </tr>
              )
            }
          </tbody>
        </table>
      </div>
    )
  }
}
