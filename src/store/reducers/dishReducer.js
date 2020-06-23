const initState = {
  createLoading: false,
  fetchLoading: false,
  deleteLoading: false,
  dishes: [],
  error: null,
};
const dishReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_DISHES_STARTED":
      return {
        ...state,
        fetchLoading: true,
        error: null,
      };

    case "FETCH_DISHES_SUCCESS":
      return {
        ...state,
        error: null,
        fetchLoading: false,
        dishes: action.dishes,
      };

    case "FETCH_DISHES_ERROR":
      return {
        ...state,
        fetchLoading: false,
        error: action.error,
      };

    case "CREATE_DISHES_STARTED":
      return {
        ...state,
        error: null,
        createLoading: true,
      };

    case "CREATE_DISHES_SUCCESS":
      return {
        ...state,
        dishes: [...state.dishes, action.dishes],
        error: null,
        createLoading: false,
      };

    case "CREATE_DISHES_ERROR":
      return {
        ...state,
        error: action.err,
        fetchLoading: false,
        createLoading: false,
      };

    case "UPDATE_DISHES_STARTED":
      return {
        ...state,
        error: null,
        updateLoading: true,
      };

    case "UPDATE_DISHES_SUCCESS":
      return {
        ...state,
        dishes: state.dishes.map((dish) => {
          console.log(dish.dish_id + " == " + action.dish.dish_id);
          if (dish.dish_id === action.dish.dish_id) {
            return {
              ...dish,
              name: action.dish.name,
              title: action.dish.title,
              picture: action.dish.picture,
              price: action.dish.price,
              description: action.dish.description,
            };
          } else return dish;
        }),
        error: null,
        updateLoading: false,
      };

    case "UPDATE_DISHES_ERROR":
      return {
        ...state,
        error: action.err,
        fetchLoading: false,
        updateLoading: false,
      };

    case "DELETE_DISHES_STARTED":
      return {
        ...state,
        deleteLoading: true,
      };

    case "DELETE_DISHES_SUCCESS":
      return {
        ...state,
        deleteLoading: false,
        dishes: state.dishes.filter((dishes) => dishes.dish_id !== action.id),
      };
    case "DELETE_DISHES_ERROR":
      return {
        ...state,
        deleteLoading: false,
        error: action.err,
      };
    case "REMOVE_DISHES":
      return {
        ...state,
        dishes: [],
      };

    default:
      return state;
  }
};
export default dishReducer;
