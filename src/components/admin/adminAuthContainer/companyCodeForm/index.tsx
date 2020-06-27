import React, { FC } from "react";
import { Formik, Form, Field } from "formik";
import { companyCodeInitialValues } from "../../../../utils/initialValues";
import { companyCodeValidationSchema } from "../../../../utils/validation/admin";
import renderInput from "../../../customComponents/input";

interface Props {
  setFormViewStep: (step: number) => void;
  setCompanyCode: (companyCode: string) => void;
}

const CompanyCodeForm: FC<Props> = ({ setFormViewStep, setCompanyCode }) => {
  const preSubmit = (value: any) => {
    setCompanyCode(value.companyCode)
    setFormViewStep(1)
  };

  return (
    <Formik
      initialValues={companyCodeInitialValues}
      onSubmit={preSubmit}
      validationSchema={companyCodeValidationSchema}
    >
      {({ handleSubmit }) => (
        <Form className="row container position-relative col-xl-3 col-lg-4 col-md-5 col-sm-6 col-xs-7 p-3 rounded-lg bg-white custom-form-shadow animate__animated animate__fadeIn">
          <span className="display-4 col-xl-12 col-lg-12 col-md-12 col-sm-12 text-center">
            Company Code
          </span>
          <div className="form-row input-group w-100">
            <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9 col-9">
              <Field
                name="companyCode"
                component={renderInput}
                placeholder="Company Code"
                type="text"
              />
            </div>
            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3">
              <button
                type="submit"
                onSubmit={() => handleSubmit()}
                className="btn btn-primary w-100"
              >
                Next
              </button>
            </div>
          </div>
          <div className="w-100 d-flex justify-content-end">
            <a href="/#">Register your company</a>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default CompanyCodeForm;
