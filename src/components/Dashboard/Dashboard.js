import React, { Component } from "react";
import ViewPatients from "../Dashboard/ViewPatients/ViewPatients";
import classes from "./Dashboard.css";
import InsertPatients from "./InsertPatients/InsertPatients";

class Dashboard extends Component {
  render() {
    return (
      <div className={classes.Dashboard}>
        <ViewPatients />
        <InsertPatients />
      </div>
    );
  }
}

export default Dashboard;
