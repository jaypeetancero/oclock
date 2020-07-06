const initialState = {
  isAuthenticated: false,
  loggedInUser: {},
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        loggedInUser: action.payload,
        isAuthenticated: true,
      };
    default:
      return state;
  }
};
