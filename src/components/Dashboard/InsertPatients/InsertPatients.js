import React, { Component } from "react";
import classes from "./InsertPatients.css";

class InsertPatients extends Component {
  render() {
    return (
      <div className={classes.InsertPatients}>
        <h1>Insert Patients</h1>
        <form action="">
          <div>
            <label htmlFor="">Patient Name</label>
            <input type="text" />
          </div>
          <div>
            <label htmlFor="">Patient Mobile No.</label>
            <input type="text" maxLength="10" />
          </div>
          <div>
            <button>Insert</button>
          </div>
        </form>
      </div>
    );
  }
}

export default InsertPatients;
