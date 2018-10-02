import React, { Component } from "react";
import classes from "./PatientDetail.css";
import axios from "axios";

class PatientDetail extends Component {
  state = {
    details: {
      id: null,
      avatar: null,
      address: null,
      mobile: null,
      name: null,
      fatherName: null,
      motherName: null
    }
  };

  componentDidMount = () => {
    axios
      .get("http://localhost:3001" + this.props.location.pathname)
      .then(response => {
        this.setState({
          ...this.state.details,
          details: response.data
        });
      });
  };

  componentDidUpdate = () => {
    axios
      .get("http://localhost:3001" + this.props.location.pathname)
      .then(response => {
        if (this.state.details.id !== response.data.id) {
          this.setState({
            ...this.state.details,
            details: response.data
          });
        }
      });
  };

  render() {
    return (
      <div className={classes.PatientDetail}>
        <h1>Patient Detail</h1>
        <div className={classes.Container}>
          <div className={classes.Avatar}>
            <img src={this.state.details.avatar} alt="" />
          </div>
          <div className={classes.Details}>
            <div>
              <h3>Patient ID: </h3>
              <h5>{this.state.details.id}</h5>
            </div>
            <div>
              <h3>Name: </h3>
              <h5>{this.state.details.name}</h5>
            </div>
            <div>
              <h3>Father Name: </h3>
              <h5>{this.state.details.fatherName}</h5>
            </div>
            <div>
              <h3>Mother Name: </h3>
              <h5>{this.state.details.motherName}</h5>
            </div>
            <div>
              <h3>Address: </h3>
              <h5>{this.state.details.address}</h5>
            </div>
            <div>
              <h3>Mobile No: </h3>
              <h5>{this.state.details.mobile}</h5>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PatientDetail;
