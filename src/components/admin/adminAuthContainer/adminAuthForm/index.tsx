import React, { FC, useState } from "react";

interface Props {
  setFormViewStep: (step: number) => void;
}

const AdminAuthForm: FC<Props> = ({ setFormViewStep }) => {
  const [isShowPassword, toggleShowPassword] = useState(false);

  const handleTogglePasswordVisibility = () => {
    toggleShowPassword((isShow) => !isShow);
  };

  return (
    <form className="row container position-relative col-xl-3 col-lg-4 col-md-5 col-sm-6 col-xs-7 p-3 rounded-lg bg-white custom-form-shadow animate__animated animate__fadeIn">
      <span className="display-4 col-xl-12 col-lg-12 col-md-12 col-sm-12 text-center">
        Login
      </span>
      <div className="input-group">
        <input type="text" className="form-control" placeholder="Username" />
      </div>
      <div className="input-group">
        <input
          type={isShowPassword ? "text" : "password"}
          className="form-control"
          placeholder="Password"
        />
        <div className="input-group-prepend">
          <button
            className="btn btn-outline-secondary"
            type="button"
            onClick={handleTogglePasswordVisibility}
          >
            <i className={isShowPassword ? "far fa-eye" : "fas fa-eye-slash"} />
          </button>
        </div>
      </div>
      <div className="form-row input-group w-100">
        <div className="col-9">
          <a href="/#">Forgot Password?</a>
        </div>
        <div className="col-3 m-0 p-0">
          <button className="btn btn-primary w-100 d-flex justify-content-around align-items-center">
            <i className="fas fa-sign-in-alt" />
            Login
          </button>
        </div>
      </div>
    </form>
  );
};

export default AdminAuthForm;
