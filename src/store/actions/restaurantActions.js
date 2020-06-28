import axios from 'axios';
require('dotenv').config();

const config = {
  headers: {
    Authorization: `Bearer 5wnzYJVckhqUmczsJM7iz_7lMvDEBEyZglw1ttvBoahGkNiao7YH729Msxa0fDHFElYk1NYGK1i3kXFxj4ChHhP6bs63spWfUDm4SNQbfukM6nnlYxa_jPJUnloIdZ0lVA9x6rCw-ePY6rbTOjDMdxqwCnn-jCB1oHRoJjsmC9i_01T3fdd9el2Q6iJ-rVuzPyS1IsR7emO-H1irhk74QifyKRTHi7Jr-lMJNDF2C4CFiSuGil9xNI-2scDBoH7pN4wnEMltKMZS2ExzaRzA8mSw1TKMqdMMxJQ6f_Vao2P39O9ZyPA-pgdi5fVCm-HzBBCVdsDf2WpdoSxT54Lrba1ouv-enM0T1M5hm-CHWOWHOlsTTKmFLrdFB8bUhhBkr-naMzxKD7_-qvoHtPQskygf2Xq8owGgoqGjrh3aDTEWc0JbZLw6Vgyy3h86VbJpgyQlLnMEqTX6ia8LNkt74CX-1tVhIo3iSkirm44MenBpTr36m10RyJOMCOgX91Bj`,
    // 'Access-Control-Allow-Origin': '*',
    // 'Content-type': 'application/json',
    // Accept: '*/*',
  },
};

export const fetchRestaurants = () => {
  return (dispatch, getState) => {
    const { authToken } = getState().auth;
    const header = {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    };

    dispatch({ type: 'FETCH_RESTAURANT_STARTED' });

    axios
      .get(`http://allergyappipb.azurewebsites.net/api/Restaurant`, header)
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
    const { authToken } = getState().auth;
    const header = {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    };
    //make async call to database
    dispatch({ type: 'CREATE_RESTAURANT_STARTED' });
    axios
      .post(
        `http://allergyappipb.azurewebsites.net/api/Restaurant`,
        {
          name: restaurant.restaurantName,
          adress: restaurant.restaurantAddress,
          company_id: restaurant.companyId,
        },
        header
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
    const { authToken } = getState().auth;
    const header = {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    };
    //make async call to database
    dispatch({ type: 'DELETE_RESTAURANT_STARTED' });
    axios
      .delete(
        `http://allergyappipb.azurewebsites.net/api/Restaurant/${id}`,
        header
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
    const { authToken } = getState().auth;
    const header = {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    };
    dispatch({ type: 'EDIT_RESTAURANT_STARTED' });
    return axios
      .put(
        `http://allergyappipb.azurewebsites.net/api/Restaurant/${restaurantId}`,
        {
          name: restaurant.restaurantName,
          adress: restaurant.restaurantAddress,
          plan_id: 1,
          company_id: restaurant.companyId,
        },
        header
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
export const removeRestaurants = () => {
  return (dispatch, getState) => {
    dispatch({ type: 'REMOVE_RESTAURANTS' });
  };
};
