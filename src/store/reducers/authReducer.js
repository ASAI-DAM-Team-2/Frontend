const initState = {
  authLoading: false,
  authToken: null,
  authError: null,
};
const authReducer = (state = initState, action) => {
  switch (action.type) {
    case 'AUTH_USER_STARTED':
      console.log('auth started');
      return state;

    case 'AUTH_USER_SUCCESS':
      console.log('auth user success');
      return {
        ...state,
        authError: null,
      };

    case 'AUTH_USER_ERROR':
      console.log('auth user error');
      return {
        ...state,
        authError: action.err,
      };
    default:
      return state;
  }
};
export default authReducer;
