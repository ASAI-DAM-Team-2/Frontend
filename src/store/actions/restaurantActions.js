import axios from 'axios';

export const createRestaurant = (restaurant) => {
  return (dispatch, getState) => {
    //make async call to database
    dispatch(createRestaurantStarted());
    axios
      .post(`https://jsonplaceholder.typicode.com/todos`, {
        restaurant,
        completed: false,
      })
      .then((res) => {
        dispatch(createRestaurantSuccess(res.data));
      })
      .catch((err) => {
        dispatch(createRestaurantFailure(err.message));
      });
    dispatch({ type: 'CREATE_RESTAURANT', restaurant });
  };
};

const createRestaurantStarted = () => ({
  type: 'CREATE_RESTAURANT_STARTED',
});

const createRestaurantSuccess = (todo) => ({
  type: 'CREATE_RESTAURANT_SUCCESS',
  payload: {
    ...todo,
  },
});

const createRestaurantFailure = (error) => ({
  type: 'CREATE_RESTAURANT_FAILURE',
  payload: {
    error,
  },
});
