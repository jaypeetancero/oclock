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
          <input {...field} {...props} type="text" className={`form-control is-${touched[field.name] && errors[field.name] && 'invalid'}`} />
          {touched[field.name] && errors[field.name] && (
            <span className="text-danger">{errors[field.name]}</span>
          )}
        </>
      );
    default:
      return null;
  }
};

export default renderInput;
