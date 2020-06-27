import React, { useState } from "react";
import CompanyCodeForm from "./companyCodeForm";
import AdminAuthForm from "./adminAuthForm";
import useLoginAdmin from './hooks/useLoginAdmin';

const AdminAuthContainer = () => {
  const [formViewStep, setFormViewStep] = useState(0);
  const [companyCode, setCompanyCode] = useState("");
  const { status, error, response } = useLoginAdmin();

  if (formViewStep === 0)
    return (
      <CompanyCodeForm
        setFormViewStep={setFormViewStep}
        setCompanyCode={setCompanyCode}
      />
    );
  if (formViewStep === 1)
    return <AdminAuthForm setFormViewStep={setFormViewStep} />;
  else return null;
};

export default AdminAuthContainer;
