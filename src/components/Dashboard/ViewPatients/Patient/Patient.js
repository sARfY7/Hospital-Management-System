import React from "react";
import classes from "./Patient.css";
import { Link } from "react-router-dom";

const patient = props => {
  return (
    <tr className={classes.Patient}>
      <td>{props.srno}</td>
      <td>
        <Link to={"/patients/" + props.srno}>{props.pname}</Link>
      </td>
      <td>{props.pmob}</td>
      <td>
        <button onClick={() => props.delete(props.srno)}>
          <i className="fas fa-trash-alt" />
          Delete
        </button>
        <Link to={"/patients/edit/" + props.srno}>
          <button>
            <i className="fas fa-edit" />
            Edit
          </button>
        </Link>
      </td>
    </tr>
  );
};

export default patient;
