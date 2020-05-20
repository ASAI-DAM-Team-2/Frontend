const initState = {
  createLoading: false,
  fetchLoading: false,
  deleteLoading: false,
  restaurants: [],
  error: null,
};
const restaurantReducer = (state = initState, action) => {
  switch (action.type) {
    case 'FETCH_RESTAURANT_STARTED':
      console.log('fetching restaurant');
      return {
        ...state,
        fetchLoading: true,
        error: null,
      };

    case 'FETCH_RESTAURANT_SUCCESS':
      console.log('fetch restaurant success');
      return {
        ...state,
        error: null,
        fetchLoading: false,
        restaurants: action.restaurants,
      };

    case 'FETCH_RESTAURANT_ERROR':
      console.log('fetch restaurant error');

      return {
        ...state,
        fetchLoading: false,
        error: action.payload.error,
      };

    case 'CREATE_RESTAURANT_STARTED':
      console.log('created started');
      return {
        ...state,
        error: null,
        createLoading: true,
      };

    case 'CREATE_RESTAURANT_SUCCESS':
      console.log('create restaurant success', action.restaurant);
      return {
        ...state,
        restaurants: [...state.restaurants, action.restaurant],
        error: null,
        createLoading: false,
      };

    case 'CREATE_RESTAURANT_ERROR':
      console.log('create restaurant error', action.err);
      return {
        ...state,
        error: action.err,
        fetchLoading: false,
        createLoading: false,
      };

    case 'DELETE_RESTAURANT_STARTED':
      console.log('delete restaurant started');
      return {
        ...state,
        deleteLoading: true,
      };

    case 'DELETE_RESTAURANT_SUCCESS':
      console.log('delete restaurant success');
      return {
        ...state,
        deleteLoading: false,
        restaurants: state.restaurants.filter(
          (restaurant) => restaurant.restaurant_id !== action.id
        ),
      };
    case 'DELETE_RESTAURANT_ERROR':
      console.log('delete restaurant error');

      return {
        ...state,
        deleteLoading: false,
        error: action.err,
      };

    default:
      return state;
  }
};
export default restaurantReducer;
