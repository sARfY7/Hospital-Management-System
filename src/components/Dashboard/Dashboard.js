import React, { Component } from "react";
import ViewPatients from "../Dashboard/ViewPatients/ViewPatients";
import classes from "./Dashboard.css";
import InsertPatients from "./InsertPatients/InsertPatients";
import Patient from "./ViewPatients/Patient/Patient";
import axios from "axios";
import PatientDetail from "./PatientDetail/PatientDetail";
import EditPatientDetail from "./EditPatientDetail/EditPatientDetail";
import { Route } from "react-router-dom";

class Dashboard extends Component {
  state = {
    patients: [],
    totalPages: 0,
    currentPage: null
  };

  componentDidMount() {
    axios
      .get("http://localhost:3001/patients?_limit=10&_page=" + this.state.page)
      .then(response => {
        axios.get("http://localhost:3001/patients").then(res => {
          this.setState({
            patients: response.data,
            totalPages: res.data.length,
            currentPage: 1
          });
        });
      });
  }

  deletePatientHandler = pid => {
    axios.delete("http://localhost:3001/patients/" + pid).then(response => {
      this.paginationHandler(this.state.currentPage);
      console.log("Deleted");
    });
  };

  updatePatientHandler = pid => {};

  paginationHandler = page => {
    axios
      .get("http://localhost:3001/patients?_limit=10&_page=" + page)
      .then(response => {
        console.log("View Patients Rendered");
        this.setState({
          ...this.state.patients,
          patients: response.data,
          currentPage: page
        });
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
          update={this.updatePatientHandler}
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
      <div className={classes.Dashboard}>
        <ViewPatients
          patients={transformedPatients}
          pagination={paginationItems}
        />
        <Route path="/patients/:id" exact component={PatientDetail} />
        <Route path="/patients/edit/:id" component={EditPatientDetail} />
        <Route path="/" exact component={InsertPatients} />
      </div>
    );
  }
}

export default Dashboard;
