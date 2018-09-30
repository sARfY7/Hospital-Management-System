import React from "react";
import classes from "./Patient.css";

const patient = props => {
  return (
    <tr className={classes.Patient}>
      <td>{props.srno}</td>
      <td>{props.pname}</td>
      <td>{props.pmob}</td>
      <td>
        <i
          className="fas fa-trash-alt"
          title="Delete"
          onClick={() => props.delete(props.srno)}
        />
        <i className="fas fa-edit" title="Edit" />
      </td>
    </tr>
  );
};

export default patient;
