import { AdminAuthProps } from "./adminAuth";

interface AuthReducerProps {
  isAuthenticated: boolean;
  loggedInUser: AdminAuthProps;
}

export interface StateData {
  authReducer: AuthReducerProps;
}
