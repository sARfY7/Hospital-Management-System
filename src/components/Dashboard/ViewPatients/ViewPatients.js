import React, { Component } from "react";
import classes from "./ViewPatients.css";

class ViewPatients extends Component {
  render() {
    return (
      <div className={classes.VPContainer}>
        <div>
          <h1>View Patients</h1>
          <table className={classes.ViewPatients}>
            <thead>
              <tr>
                <th>Sr. No.</th>
                <th>Name</th>
                <th>Mobile No.</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>{this.props.patients}</tbody>
          </table>
        </div>
        <div className={classes.Pagination}>
          <ul>{this.props.pagination}</ul>
        </div>
      </div>
    );
  }
}

export default ViewPatients;
