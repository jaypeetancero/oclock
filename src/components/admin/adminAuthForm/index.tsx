import React from "react";

const AdminAuthForm = () => {
  return (
    <div className="row container position-relative col-xl-3 col-lg-4 col-md-5 col-sm-6 col-xs-7 p-3 rounded-lg bg-white custom-form-shadow animate__animated animate__fadeIn">
      <span className="display-4 col-xl-12 col-lg-12 col-md-12 col-sm-12 text-center">
        Company Code
      </span>
      <div className="row w-100">
        <input
          type="text"
          className="form-control col-xl-9 col-lg-9 col-md-9 col-sm-9"
          placeholder="Company Code"
        />
        <button
          type="button"
          className="btn btn-primary col-xl-3 col-lg-3 col-md-3 col-sm-3"
        >
          Next
        </button>
      </div>
      <a href="/#" className="w-100 text-right">
        Register your company
      </a>
    </div>
  );
};

export default AdminAuthForm;
