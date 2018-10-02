import React, { Component } from "react";
import classes from "./EditPatientDetail.css";
import axios from "axios";

class EditPatientDetail extends Component {
  state = {
    details: {
      id: null,
      avatar: null,
      address: null,
      mobile: null,
      name: null,
      fatherName: null,
      motherName: null
    },
    msg: null
  };

  updatedState = {};

  componentDidMount = () => {
    axios
      .get("http://localhost:3001/patients/" + this.props.match.params.id)
      .then(response => {
        this.updatedState = { ...this.state.details };
        this.setState({
          ...this.state.details,
          details: response.data
        });
      });
  };

  componentDidUpdate = () => {
    axios
      .get("http://localhost:3001/patients/" + this.props.match.params.id)
      .then(response => {
        this.updatedState = { ...this.state.details };
        if (this.state.details.id !== response.data.id) {
          this.setState({
            ...this.state.details,
            details: response.data
          });
        }
      });
  };

  updateHandler = () => {
    axios
      .put("http://localhost:3001/patients/" + this.props.match.params.id, {
        name: this.updatedState.name,
        fatherName: this.updatedState.fatherName,
        motherName: this.updatedState.motherName,
        address: this.updatedState.address,
        mobile: this.updatedState.mobile,
        avatar: this.updatedState.avatar
      })
      .then(response => {
        this.setState({ ...this.state, msg: "Updated Successfully" });
      });
  };

  nameHandler = event => {
    this.updatedState = { ...this.updatedState, name: event.target.value };
  };

  fatherNameHandler = event => {
    this.updatedState = {
      ...this.updatedState,
      fatherName: event.target.value
    };
  };

  motherNameHandler = event => {
    this.updatedState = {
      ...this.updatedState,
      motherName: event.target.value
    };
  };

  addressHandler = event => {
    this.updatedState = { ...this.updatedState, address: event.target.value };
  };

  mobileHandler = event => {
    this.updatedState = { ...this.updatedState, mobile: event.target.value };
  };

  render() {
    return (
      <div className={classes.EditPatientDetail}>
        <h1>Edit Patient Detail</h1>
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
              <h5>
                <input
                  type="text"
                  onChange={this.nameHandler}
                  placeholder={
                    this.state.details.name === null
                      ? ""
                      : this.state.details.name
                  }
                />
              </h5>
            </div>
            <div>
              <h3>Father Name: </h3>
              <h5>
                <input
                  type="text"
                  onChange={this.fatherNameHandler}
                  placeholder={
                    this.state.details.fatherName === null
                      ? ""
                      : this.state.details.fatherName
                  }
                />
              </h5>
            </div>
            <div>
              <h3>Mother Name: </h3>
              <h5>
                <input
                  type="text"
                  onChange={this.motherNameHandler}
                  placeholder={
                    this.state.details.motherName === null
                      ? ""
                      : this.state.details.motherName
                  }
                />
              </h5>
            </div>
            <div>
              <h3>Address: </h3>
              <h5>
                <input
                  type="text"
                  onChange={this.addressHandler}
                  placeholder={
                    this.state.details.address === null
                      ? ""
                      : this.state.details.address
                  }
                />
              </h5>
            </div>
            <div>
              <h3>Mobile No: </h3>
              <h5>
                <input
                  type="text"
                  onChange={this.mobileHandler}
                  maxLength="10"
                  placeholder={
                    this.state.details.mobile === null
                      ? ""
                      : this.state.details.mobile
                  }
                />
              </h5>
            </div>
          </div>
        </div>
        <div>
          <button onClick={this.updateHandler}>Update</button>
        </div>
        <div>
          <h4>{this.state.msg}</h4>
        </div>
      </div>
    );
  }
}

export default EditPatientDetail;
