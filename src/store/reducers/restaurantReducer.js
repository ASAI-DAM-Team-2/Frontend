const initState = {
  createLoading: false,
  fetchLoading: false,
  deleteLoading: false,
  editLoading: false,
  restaurants: [],
  error: null,
};
const restaurantReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_RESTAURANT_STARTED":
      return {
        ...state,
        fetchLoading: true,
        error: null,
      };

    case "FETCH_RESTAURANT_SUCCESS":
      return {
        ...state,
        error: null,
        fetchLoading: false,
        restaurants: action.restaurants,
      };

    case "FETCH_RESTAURANT_ERROR":
      return {
        ...state,
        fetchLoading: false,
        error: action.err,
      };

    case "CREATE_RESTAURANT_STARTED":
      return {
        ...state,
        error: null,
        createLoading: true,
      };

    case "CREATE_RESTAURANT_SUCCESS":
      return {
        ...state,
        restaurants: [...state.restaurants, action.restaurant],
        error: null,
        createLoading: false,
      };

    case "CREATE_RESTAURANT_ERROR":
      return {
        ...state,
        error: action.err,
        fetchLoading: false,
        createLoading: false,
      };

    case "DELETE_RESTAURANT_STARTED":
      return {
        ...state,
        deleteLoading: true,
      };

    case "DELETE_RESTAURANT_SUCCESS":
      return {
        ...state,
        deleteLoading: false,
        restaurants: state.restaurants.filter(
          (restaurant) => restaurant.restaurant_id !== action.id
        ),
      };
    case "DELETE_RESTAURANT_ERROR":
      return {
        ...state,
        deleteLoading: false,
        error: action.err,
      };

    case "EDIT_RESTAURANT_STARTED":
      return {
        ...state,
        error: null,
        editLoading: true,
      };

    case "EDIT_RESTAURANT_SUCCESS":
      return {
        ...state,
        restaurants: state.restaurants.map((restaurant) => {
          if (restaurant.restaurant_id === action.restaurant.restaurant_id) {
            return {
              ...restaurant,
              name: action.restaurant.name,
              company_id: action.restaurant.company_id,
              adress: action.restaurant.adress,
              plan_id: action.restaurant.plan_id,
            };
          } else return restaurant;
        }),
        error: null,
        editLoading: false,
      };

    case "EDIT_RESTAURANT_ERROR":
      return {
        ...state,
        error: action.err,
        editLoading: false,
      };
    case "REMOVE_RESTAURANTS":
      return {
        ...state,
        restaurants: [],
      };

    default:
      return state;
  }
};
export default restaurantReducer;
