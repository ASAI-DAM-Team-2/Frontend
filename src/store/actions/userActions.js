import axios from "axios";
require("dotenv").config();

const config = {
  headers: {
    Authorization: `Bearer 5wnzYJVckhqUmczsJM7iz_7lMvDEBEyZglw1ttvBoahGkNiao7YH729Msxa0fDHFElYk1NYGK1i3kXFxj4ChHhP6bs63spWfUDm4SNQbfukM6nnlYxa_jPJUnloIdZ0lVA9x6rCw-ePY6rbTOjDMdxqwCnn-jCB1oHRoJjsmC9i_01T3fdd9el2Q6iJ-rVuzPyS1IsR7emO-H1irhk74QifyKRTHi7Jr-lMJNDF2C4CFiSuGil9xNI-2scDBoH7pN4wnEMltKMZS2ExzaRzA8mSw1TKMqdMMxJQ6f_Vao2P39O9ZyPA-pgdi5fVCm-HzBBCVdsDf2WpdoSxT54Lrba1ouv-enM0T1M5hm-CHWOWHOlsTTKmFLrdFB8bUhhBkr-naMzxKD7_-qvoHtPQskygf2Xq8owGgoqGjrh3aDTEWc0JbZLw6Vgyy3h86VbJpgyQlLnMEqTX6ia8LNkt74CX-1tVhIo3iSkirm44MenBpTr36m10RyJOMCOgX91Bj`,
  },
};

export const fetchUser = () => {
  return (dispatch, getState) => {
    dispatch({ type: "FETCH_USER_STARTED" });
    axios
      .get(
        `https://allergyappbackend.azurewebsites.net/api/account/userinfo`,
        config
      )
      .then((res) => {
        dispatch({
          type: "FETCH_USER_SUCCESS",
          user: res.data,
        });
      })
      .catch(function (err) {
        dispatch({ type: "FETCH_USER_ERROR", err });
      });
  };
};

export const updateUser = (dish) => {
  return (dispatch, getState) => {
    //make async call to database
    dispatch({ type: "UPDATE_USER_STARTED" });
    axios
      .put(
        `https://allergyappbackend.azurewebsites.net/api/Dish/${dish.dishDish_id}`,
        {
          Email: dish.dishTitle,
          Name: dish.dishName,
          Surname: dish.dishPrice,
        },
        config
      )
      .then((res) => {
        dispatch({
          type: "UPDATE_USER_SUCCESS",
          dishes: res.data,
        });
      })
      .catch((err) => {
        dispatch({ type: "UPDATE_USER_ERROR", err });
      });
  };
};
