import React, {Component, PropTypes} from 'react';
import Helmet from 'react-helmet';
import {connect} from 'react-redux';


export default class Widgets extends Component {

  handleEdit() {
    console.log("hello handle")
  }

  render() {
    const styles = require('./Status.scss');
    return (
      <div className="container">
        <table className="table table-striped">
          <thead>
          <tr>
            <th className={styles.idCol}>ID</th>
            <th className={styles.colorCol}>Color</th>
            <th className={styles.sprocketsCol}>Sprockets</th>
            <th className={styles.ownerCol}>Owner</th>
            <th className={styles.buttonCol}></th>
          </tr>
          </thead>
          <tbody>
              <tr key="Widget Id">
                <td className={styles.idCol}>Widget Id</td>
                <td className={styles.colorCol}>Widget Color</td>
                <td className={styles.sprocketsCol}>Widget sprocketCount</td>
                <td className={styles.ownerCol}>Widget Owner</td>
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
