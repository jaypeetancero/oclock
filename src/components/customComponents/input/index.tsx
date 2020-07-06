import React, { FC } from "react";

const renderInput: FC<any> = ({
  field,
  form: { touched, errors },
  ...props
}) => {
  switch (props.type) {
    case "text":
      return (
        <>
          <input
            {...field}
            {...props}
            type="text"
            className={`form-control is-${
              touched[field.name] && errors[field.name] && "invalid"
            }`}
          />
          {touched[field.name] && errors[field.name] && (
            <span className="text-danger">{errors[field.name]}</span>
          )}
        </>
      );
    case "password-with-toggle":
      return (
        <>
          <input
            {...field}
            {...props}
            type={props.customType ? props.customType : "password"}
            className={`form-control is-${
              touched[field.name] && errors[field.name] && "invalid"
            }`}
          />
          {touched[field.name] && errors[field.name] && (
            <span className="text-danger">{errors[field.name]}</span>
          )}
          {props.customType && (
            <div className="form-check my-2">
              <input
                type="checkbox"
                className="form-check-input"
                onChange={props.toggleShowPassword}
              />
              <label className="form-check-label">Show password?</label>
            </div>
          )}
        </>
      );
    default:
      return null;
  }
};

export default renderInput;
