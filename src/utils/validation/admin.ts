import * as Yup from "yup";

export const companyCodeValidationSchema = Yup.object().shape({
  companyCode: Yup.string().required("Required"),
});
