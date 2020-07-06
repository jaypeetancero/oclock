import React, { FC, useState } from "react";
import { Formik, Form, Field } from "formik";
import { adminAuthInitialValues } from "../../../../utils/initialValues";
import { authValidationSchema } from "../../../../utils/validation/admin";
import renderInput from "../../../customComponents/input";
import { AdminAuthProps } from "../../../../interfaces/adminAuth";

interface Props {
  setFormViewStep: (step: number) => void;
  onSubmit: (formValues: AdminAuthProps) => void;
}

const AdminAuthForm: FC<Props> = ({ setFormViewStep, onSubmit }) => {
  const [isShowPassword, toggleShowPassword] = useState(false);

  const handleTogglePasswordVisibility = (e: any) => {
    toggleShowPassword(e.target.checked);
  };

  const preSubmit = (values: AdminAuthProps) => {
    onSubmit(values);
  };

  return (
    <Formik
      initialValues={adminAuthInitialValues}
      onSubmit={preSubmit}
      validationSchema={authValidationSchema}
    >
      <Form className="row container position-relative col-xl-3 col-lg-4 col-md-5 col-sm-6 col-xs-7 p-3 rounded-lg bg-white custom-form-shadow animate__animated animate__fadeIn">
        <span className="display-4 col-xl-12 col-lg-12 col-md-12 col-sm-12 text-center">
          Login
        </span>
        <div className="input-group form-row w-100">
          <div className="col-12">
            <Field
              name="username"
              component={renderInput}
              placeholder="Username"
              type="text"
            />
          </div>
        </div>
        <div className="input-group form-row w-100">
          <div className="col-12">
            <Field
              name="password"
              component={renderInput}
              placeholder="Password"
              toggleShowPassword={handleTogglePasswordVisibility}
              customType={isShowPassword ? "text" : "password"}
              type="password-with-toggle"
            />
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
      </Form>
    </Formik>
  );
};

export default AdminAuthForm;
