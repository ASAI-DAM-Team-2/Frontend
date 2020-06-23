import axios from "axios";
require("dotenv").config();

export const fetchRestaurantDishes = (restaurant_id) => {
  return (dispatch, getState) => {
    const { authToken } = getState().auth;
    const header = {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    };
    dispatch({ type: "FETCH_DISHES_STARTED" });
    axios
      .get(
        `https://allergyappbackend.azurewebsites.net/api/Restaurant/${restaurant_id}/Dish`,
        header
      )
      .then((res) => {
        dispatch({
          type: "FETCH_DISHES_SUCCESS",
          dishes: res.data,
        });
      })
      .catch(function (err) {
        dispatch({ type: "FETCH_DISHES_ERROR", err });
      });
  };
};

export const createDish = (dish) => {
  return (dispatch, getState) => {
    const { authToken } = getState().auth;
    const header = {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    };
    //make async call to database
    dispatch({ type: "CREATE_DISHES_STARTED" });
    axios
      .post(
        `https://allergyappbackend.azurewebsites.net/api/Dish`,
        {
          title: dish.dishTitle,
          name: dish.dishName,
          price: dish.dishPrice,
          picture: dish.dishPicture,
          description: dish.dishDescription,
          restaurant_id: dish.dishRestaurant_id,
        },
        header
      )
      .then((res) => {
        dispatch({
          type: "CREATE_DISHES_SUCCESS",
          dishes: res.data,
        });
      })
      .catch((err) => {
        dispatch({ type: "CREATE_DISHES_ERROR", err });
      });
  };
};

export const updateDish = (dish) => {
  return (dispatch, getState) => {
    const { authToken } = getState().auth;
    const header = {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    };
    //make async call to database
    dispatch({ type: "UPDATE_DISHES_STARTED" });
    axios
      .put(
        `https://allergyappbackend.azurewebsites.net/api/Dish/${dish.dishDish_id}`,
        {
          title: dish.dishTitle,
          name: dish.dishName,
          price: dish.dishPrice,
          picture: dish.dishPicture,
          description: dish.dishDescription,
          restaurant_id: dish.dishRestaurant_id,
        },
        header
      )
      .then((res) => {
        dispatch({
          type: "UPDATE_DISHES_SUCCESS",
          dish: res.data,
        });
      })
      .catch((err) => {
        dispatch({ type: "UPDATE_DISHES_ERROR", err });
      });
  };
};

export const deleteRestaurantDish = (id) => {
  return (dispatch, getState) => {
    const { authToken } = getState().auth;
    const header = {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    };
    //make async call to database
    dispatch({ type: "DELETE_DISHES_STARTED" });
    axios
      .delete(
        `https://allergyappbackend.azurewebsites.net/api/Dish/${id}`,
        header
      )
      .then((res) => {
        dispatch({
          type: "DELETE_DISHES_SUCCESS",
          id: id,
        });
      })
      .catch((err) => {
        dispatch({ type: "DELETE_DISHES_ERROR", err });
      });
    // dispatch({ type: 'CREATE_RESTAURANT', restaurant });
  };
};

export const removeDishes = () => {
  return (dispatch, getState) => {
    dispatch({ type: "REMOVE_DISHES" });
  };
};
