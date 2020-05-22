import axios from 'axios';
require('dotenv').config();

const config = {
  headers: {
    Authorization: `Bearer s8fpiWdhCdweFecvuTLLFcUGrutblcgP4XE-4SjZTy3nnEMNEpYEQxWD7X9hfEh4JywNRdiXSjR6DVbclqQl-0GtLGS_AQN3Ieo2lPnnVEV57fppcrfm-o8qYXpMdSBxnZyfK9Qd2v06CXKjWyH_wxic0Px7HtMFuB9EomQFjKI4iNXL4NZ0haD8cuqxIreZD_2fH6DR5S6gNoYT31Q6Zkn7bceNrWu5x6LqPn2lNrRfzdkolkC-upQXukRrma1QaXZSUbpM6nvgVj7CpylmnS81hq8JsHGp1lYsdZVVdO-daLXU-gQnldNXO7f44jfuffqKMzkuYXAkS1R9VXTIgKnee00TaFJk7VSbmPv4bUJ2Bu55BWdfra1UMERobpGsJVDeMylfDDfamfJiNkIUT5cOqxkkBNz4h1wrtDHRzqBfGlWJ717ElN1c3Z3UNFuzDjpF56DslxlNTZnT1XNkUr4STuztL8Mguf14UK7Wyps`,
  },
};

export const fetchRestaurants = () => {
  return (dispatch, getState) => {
    dispatch({ type: 'FETCH_RESTAURANT_STARTED' });

    axios
      .get(`https://allergyappbackend.azurewebsites.net/api/Restaurant`, config)
      .then((res) => {
        dispatch({
          type: 'FETCH_RESTAURANT_SUCCESS',
          restaurants: res.data,
        });
      })
      .catch(function (err) {
        dispatch({ type: 'FETCH_RESTAURANT_ERROR', err });
      });
  };
};

export const createRestaurant = (restaurant) => {
  return (dispatch, getState) => {
    //make async call to database
    dispatch({ type: 'CREATE_RESTAURANT_STARTED' });
    axios
      .post(
        `https://allergyappbackend.azurewebsites.net/api/Restaurant`,
        {
          name: restaurant.restaurantName,
          adress: restaurant.restaurantAddress,
          company_id: restaurant.companyId,
        },
        config
      )
      .then((res) => {
        dispatch({
          type: 'CREATE_RESTAURANT_SUCCESS',
          restaurant: res.data,
        });
      })
      .catch((err) => {
        dispatch({ type: 'CREATE_RESTAURANT_ERROR', err });
      });
    // dispatch({ type: 'CREATE_RESTAURANT', restaurant });
  };
};

export const deleteRestaurant = (id) => {
  return (dispatch, getState) => {
    //make async call to database
    dispatch({ type: 'DELETE_RESTAURANT_STARTED' });
    axios
      .delete(
        `https://allergyappbackend.azurewebsites.net/api/Restaurant/${id}`,
        config
      )
      .then((res) => {
        dispatch({
          type: 'DELETE_RESTAURANT_SUCCESS',
          id: id,
        });
      })
      .catch((err) => {
        dispatch({ type: 'DELETE_RESTAURANT_ERROR', err });
      });
    // dispatch({ type: 'CREATE_RESTAURANT', restaurant });
  };
};

export const editRestaurant = (restaurant) => {
  const restaurantId = restaurant.restaurant_id;
  return (dispatch, getState) => {
    dispatch({ type: 'EDIT_RESTAURANT_STARTED' });
    return axios
      .put(
        `https://allergyappbackend.azurewebsites.net/api/Restaurant/${restaurantId}`,
        {
          name: restaurant.restaurantName,
          adress: restaurant.restaurantAddress,
          plan_id: 1,
          company_id: restaurant.companyId,
        },
        config
      )
      .then((res) => {
        dispatch({
          type: 'EDIT_RESTAURANT_SUCCESS',
          restaurant: res.data,
        });
      })

      .catch((err) => {
        dispatch({ type: 'EDIT_RESTAURANT_ERROR', err });
      });
  };
};
