import React from "react";
import Clock from "../customComponents/clock";
import AttendanceForm from "./attendanceForm";

const Attendance = () => {
  return (
    <div className="h-100 w-100 row align-items-center justify-content-center m-0 p-0">
      <div className="container col-xl-6 col-lg-6 col-md-12 col-md-12 col-sm-12 col-xs-12">
        <Clock />
      </div>
      <div className="container d-flex justify-content-center flex-column col-xl-6 col-lg-6 col-md-12 col-md-12 col-sm-12 col-xs-12">
        <AttendanceForm />
      </div>
    </div>
  );
};

export default Attendance;
