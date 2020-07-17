import React, { useState } from "react";
import { useDispatch } from "react-redux";
import CompanyCodeForm from "./companyCodeForm";
import AdminAuthForm from "./adminAuthForm";
import { AdminAuthProps } from "../../../interfaces/adminAuth";
import { loginAdmin } from "../actions";

const AdminAuthContainer = () => {
  const dispatch = useDispatch();
  const [formViewStep, setFormViewStep] = useState(0);
  const [companyCode, setCompanyCode] = useState("");

  const handleLoginSubmit = (formValues: AdminAuthProps) => {
    formValues.companyCode = companyCode;
    dispatch(loginAdmin(formValues));
  };

  if (formViewStep === 0)
    return (
      <CompanyCodeForm
        setFormViewStep={setFormViewStep}
        setCompanyCode={setCompanyCode}
      />
    );
  if (formViewStep === 1)
    return (
      <AdminAuthForm
        setFormViewStep={setFormViewStep}
        onSubmit={handleLoginSubmit}
      />
    );
  else return null;
};

export default AdminAuthContainer;
