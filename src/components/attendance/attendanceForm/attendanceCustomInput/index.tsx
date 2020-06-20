import React, { FC } from "react";

const AttendanceCustomInput: FC<any> = ({ field, form, ...props }) => {
  const { errors, touched } = form;
  switch (props.type) {
    case "text":
      return (
        <>
          {touched[field.name] && errors[field.name] && (
            <span className="text-danger animate__animated animate__fadeIn animate__faster">
              Error: {errors[field.name]}
            </span>
          )}
          <div className="d-flex align-items-center">
            <i className="fas fa-user position-absolute ml-3" />
            <input
              {...field}
              autoComplete="off"
              type="text"
              className="input-text my-3 text-center"
              placeholder="Username"
            />
          </div>
        </>
      );
    case "password":
      return (
        <>
          {touched[field.name] && errors[field.name] && (
            <span className="text-danger animate__animated animate__fadeIn animate__faster">
              Error: {errors[field.name]}
            </span>
          )}
          <div className="d-flex align-items-center">
            <i className="fas fa-key position-absolute ml-3" />
            <input
              {...field}
              type="password"
              className="input-text my-3 text-center"
              placeholder="Password"
            />
          </div>
        </>
      );
    default:
      return null;
  }
};

export default AttendanceCustomInput;
