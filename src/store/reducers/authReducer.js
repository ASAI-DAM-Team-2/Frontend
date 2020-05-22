const initState = {
  authLoading: false,
  authToken: null,
  authError: null,
  registerLoading: null,
  regError: null,
};
const authReducer = (state = initState, action) => {
  switch (action.type) {
    case 'REGISTER_USER_STARTED':
      console.log('reg started');
      return {
        ...state,
        registerLoading: true,
      };
    case 'REGISTER_USER_SUCCESS':
      console.log('reg success');
      return {
        ...state,
        regError: null,
        registerLoading: false,
      };
    case 'REGISTER_USER_ERROR':
      console.log('reg error');
      return {
        ...state,
        regError: 'Register failed',
        registerLoading: false,
      };
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
        authError: 'SignIn failed',
      };
    default:
      return state;
  }
};
export default authReducer;
