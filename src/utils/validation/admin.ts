import * as Yup from "yup";

export const companyCodeValidationSchema = Yup.object().shape({
  companyCode: Yup.string().required("Required"),
});

export const authValidationSchema = Yup.object().shape({
  username: Yup.string().required("Required"),
  password: Yup.string().required("Required"),
});
