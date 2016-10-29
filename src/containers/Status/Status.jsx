import React, {Component, PropTypes} from 'react';
import Helmet from 'react-helmet';
import {connect} from 'react-redux';


// {
//   "id": "none",
//   "name": "other",
//   "state": "Valid",
//   "location": "Moon",
//   "email": "moon@itsatrap.tech"
// }

export default class Widgets extends Component {

  handleEdit() {
    console.log("hello handle")
  }

  render() {
    const styles = require('./Status.scss');
    return (
      <div className="container">
      <div className="btn-group btn-group-justified" role="group" aria-label="...">
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
              <tr key="Widget Id">
                <td className={styles.idCol}>none</td>
                <td className={styles.colorCol}>other</td>
                <td className={styles.ownerCol}>moon@itsatrap.tech</td>
                <td className={styles.ownerCol}>Moon</td>
                <td className={styles.sprocketsCol}>Valid</td>
                <td className={styles.buttonCol}>
                  <button className="btn btn-primary" onClick={this.handleEdit()}>
                    <i className="fa fa-pencil"/> Edit
                  </button>
                </td>
              </tr>
          </tbody>
        </table>
      </div>
    )
  }
}
