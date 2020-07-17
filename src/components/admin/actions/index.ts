import { INIT, LOGIN } from "./actionTypes";
import { AdminAuthProps } from "../../../interfaces/adminAuth";

export const init = () => {
  if (
    sessionStorage.getItem("loggedInUser") !== null &&
    sessionStorage.getItem("isAuthenticated") !== null
  ) {
    return {
      type: INIT,
      loggedInUser: JSON.parse(sessionStorage.getItem("loggedInUser") || "{}"),
      isAuthenticated: sessionStorage.getItem("isAuthenticated") === "true",
    };
  } else {
    return {
      type: INIT,
      loggedInUser: null,
      isAuthenticated: false,
    };
  }
};

export const loginAdmin = (formValues: AdminAuthProps) => {
  sessionStorage.setItem("loggedInUser", JSON.stringify(formValues));
  sessionStorage.setItem("isAuthenticated", "true");
  return {
    type: LOGIN,
    payload: formValues,
    isAuthenticated: true,
  };
};
