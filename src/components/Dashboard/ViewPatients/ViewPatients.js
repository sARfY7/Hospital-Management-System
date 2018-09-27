import React, { Component } from "react";
import classes from "./ViewPatients.css";
import Patient from "./Patient/Patient";

class ViewPatients extends Component {
  state = {
    patients: [
      {
        SerialNo: 1,
        PatientName: "John",
        PatientMobileNo: "1234567890"
      },
      {
        SerialNo: 2,
        PatientName: "John",
        PatientMobileNo: "1234567890"
      },
      {
        SerialNo: 3,
        PatientName: "John",
        PatientMobileNo: "1234567890"
      }
    ]
  };

  render() {
    const patients = [...this.state.patients];
    const transformedPatients = [];
    patients.forEach(patient => {
      transformedPatients.push(
        <Patient
          key={patient.SerialNo}
          srno={patient.SerialNo}
          pname={patient.PatientName}
          pmob={patient.PatientMobileNo}
        />
      );
    });

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
            <tbody>{transformedPatients}</tbody>
          </table>
        </div>
        <div className={classes.Pagination}>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default ViewPatients;
