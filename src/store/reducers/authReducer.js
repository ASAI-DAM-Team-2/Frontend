const initState = {
  authLoading: false,
  authToken: null,
  authError: null,
  registerLoading: false,
  regError: null,
  regSuccess: null,
};
const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "REGISTER_USER_STARTED":
      return {
        ...state,
        registerLoading: true,
      };
    case "REGISTER_USER_SUCCESS":
      return {
        ...state,
        regError: null,
        regSuccess: true,
        registerLoading: false,
      };
    case "REGISTER_USER_ERROR":
      return {
        ...state,
        regError: "Register failed",
        regSuccess: null,
        registerLoading: false,
      };
    case "AUTH_USER_STARTED":
      return state;

    case "AUTH_USER_SUCCESS":
      return {
        ...state,
        authToken: action.credentials.access_token,
        authError: null,
      };

    case "AUTH_USER_ERROR":
      return {
        ...state,
        authError: "SignIn failed",
      };
    case "SIGNOUT_USER":
      return {
        ...state,
        authToken: null,
        authError: null,
      };
    default:
      return state;
  }
};
export default authReducer;
