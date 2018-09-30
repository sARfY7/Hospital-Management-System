import React, { Component } from "react";
import classes from "./InsertPatients.css";
import axios from "axios";

class InsertPatients extends Component {
  insertPatient = e => {
    const name = document.getElementById("name");
    const mobile = document.getElementById("mobile");
    const msg = document.getElementById("msg");
    e.preventDefault();
    if (name.value === "") {
      msg.innerText = "Patient Name cannot be empty";
      return;
    }
    if (mobile.value === "") {
      msg.innerText = "Patient Mobile Number cannot be empty";
      return;
    }
    axios
      .post("http://localhost:3001/patients", {
        name: name.value,
        mobile: mobile.value
      })
      .then(response => {
        console.log(response);
        name.value = "";
        mobile.value = "";
        msg.innerText = "Patient Inserted Successfully";
        setTimeout(() => {
          msg.innerText = "";
        }, 2000);
      });
  };

  render() {
    return (
      <div className={classes.InsertPatients}>
        <h1>Insert Patients</h1>
        <form>
          <div>
            <label htmlFor="name">Patient Name</label>
            <input type="text" id="name" name="name" />
          </div>
          <div>
            <label htmlFor="mobile">Patient Mobile No.</label>
            <input type="text" maxLength="10" id="mobile" name="mobile" />
          </div>
          <div>
            <button onClick={event => this.insertPatient(event)}>Insert</button>
          </div>
          <div>
            <p id="msg" />
          </div>
        </form>
      </div>
    );
  }
}

export default InsertPatients;
