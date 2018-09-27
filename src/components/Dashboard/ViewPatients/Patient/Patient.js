import React from "react";

const patient = props => {
  return (
    <tr>
      <td>{props.srno}</td>
      <td>{props.pname}</td>
      <td>{props.pmob}</td>
      <td>
        <i className="fas fa-trash-alt" title="Delete" />
        <i className="fas fa-edit" title="Edit" />
      </td>
    </tr>
  );
};

export default patient;
