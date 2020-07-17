import { INIT, LOGIN } from "./actions/actionTypes";

const initialState = {
  isAuthenticated: false,
  loggedInUser: {},
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case INIT:
      return {
        ...state,
        loggedInUser: action.loggedInUser,
        isAuthenticated: action.isAuthenticated,
      };
    case LOGIN:
      return {
        ...state,
        loggedInUser: action.payload,
        isAuthenticated: action.isAuthenticated,
      };
    default:
      return state;
  }
};
