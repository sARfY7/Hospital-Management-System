import React from "react";
import ViewPatients from "../Dashboard/ViewPatients/ViewPatients";
import classes from "./Dashboard.css";
import InsertPatients from "./InsertPatients/InsertPatients";

const dashboard = () => {
  return (
    <div className={classes.Dashboard}>
      <ViewPatients />
      <InsertPatients />
    </div>
  );
};

export default dashboard;
