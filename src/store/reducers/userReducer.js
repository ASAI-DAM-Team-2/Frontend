const initState = {
  createLoading: false,
  fetchLoading: false,
  deleteLoading: false,
  user: null,
  error: null,
};
const userReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_USER_STARTED":
      return {
        ...state,
        fetchLoading: true,
        error: null,
      };

    case "FETCH_USER_SUCCESS":
      return {
        ...state,
        error: null,
        fetchLoading: false,
        user: action.user,
      };

    case "FETCH_USER_ERROR":
      return {
        ...state,
        fetchLoading: false,
        error: action.error,
      };

    case "UPDATE_USER_STARTED":
      return {
        ...state,
        error: null,
        updateLoading: true,
      };

    case "UPDATE_USER_SUCCESS":
      return {
        ...state,
        user: [...state.user, action.user],
        error: null,
        updateLoading: false,
      };

    case "UPDATE_USER_ERROR":
      return {
        ...state,
        error: action.err,
        fetchLoading: false,
        updateLoading: false,
      };

    default:
      return state;
  }
};
export default userReducer;
