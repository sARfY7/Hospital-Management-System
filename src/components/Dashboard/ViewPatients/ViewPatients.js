import React, { Component } from "react";
import classes from "./ViewPatients.css";
import Patient from "./Patient/Patient";
import axios from "axios";

class ViewPatients extends Component {
  state = {
    patients: [],
    totalPages: 0
  };

  componentDidMount() {
    axios
      .get("http://localhost:3001/patients?_limit=10&_page=" + this.state.page)
      .then(response => {
        axios.get("http://localhost:3001/patients").then(res => {
          this.setState({
            patients: response.data,
            totalPages: res.data.length
          });
        });
      });
  }

  deletePatientHandler = pid => {
    axios.delete("http://localhost:3001/patients/" + pid).then(response => {
      console.log("Deleted: ", response);
    });
  };

  paginationHandler = page => {
    axios
      .get("http://localhost:3001/patients?_limit=10&_page=" + page)
      .then(response => {
        console.log("inside CDU");
        this.setState({ patients: response.data });
      });
  };

  render() {
    const patients = [...this.state.patients];
    const transformedPatients = [];
    patients.forEach(patient => {
      transformedPatients.push(
        <Patient
          key={patient.id}
          srno={patient.id}
          pname={patient.name}
          pmob={patient.mobile}
          delete={this.deletePatientHandler}
        />
      );
    });

    let totalPaginationItems = this.state.totalPages / 10;
    totalPaginationItems =
      this.state.totalPages % 10 !== 0
        ? totalPaginationItems + 1
        : totalPaginationItems;
    const paginationItems = [];
    for (let i = 1; i <= totalPaginationItems; i++) {
      paginationItems.push(
        <li key={i} onClick={() => this.paginationHandler(i)}>
          {i}
        </li>
      );
    }

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
          <ul>{paginationItems}</ul>
        </div>
      </div>
    );
  }
}

export default ViewPatients;
