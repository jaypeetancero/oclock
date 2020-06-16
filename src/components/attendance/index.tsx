import React from "react";
import Clock from "../customComponents/clock";
import TimeInModal from "./timeInModal";
import TimeOutModal from "./timeOutModal";

const Attendance = () => {
  return (
    <div className="h-100 w-100 row align-items-center justify-content-center m-0 p-0">
      <div className="container col-xl-6 col-lg-6 col-md-12 col-md-12 col-sm-12 col-xs-12">
        <Clock />
      </div>
      <div className="container d-flex justify-content-center flex-column col-xl-6 col-lg-6 col-md-12 col-md-12 col-sm-12 col-xs-12">
        <p className="display-3">Attendance</p>
        <div className="d-flex flex-column justify-content-around">
          <div className="d-flex align-items-center">
            <i className="fas fa-user position-absolute ml-3" />
            <input
              type="text"
              className="input-text my-3 text-center"
              placeholder="Username"
            />
          </div>
          <div className="d-flex align-items-center">
            <i className="fas fa-key position-absolute ml-3" />
            <input
              type="password"
              className="input-text my-3 text-center"
              placeholder="Password"
            />
          </div>
          <div className="d-flex justify-content-around w-100">
            <button
              className="w-50 mx-2 btn btn-primary d-flex justify-content-around align-items-center"
              data-toggle="modal"
              data-target="#timeIn-modal"
            >
              <span>Time in</span>
              <i className="fas fa-clock" />
            </button>
            <TimeInModal id="timeIn-modal" title="Time in" />
            <button
              className="w-50 mx-2 btn btn-warning d-flex justify-content-around align-items-center"
              data-toggle="modal"
              data-target="#timeOut-modal"
            >
              <span>Time out</span>
              <i className="far fa-clock" />
            </button>
            <TimeOutModal id="timeOut-modal" title="Time out" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Attendance;
