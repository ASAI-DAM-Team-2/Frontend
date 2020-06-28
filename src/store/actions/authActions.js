import axios from 'axios';
var qs = require('qs');
const config = {
  headers: {
    'Content-type': 'application/x-www-form-urlencoded',
    // Authorization: `Bearer 5wnzYJVckhqUmczsJM7iz_7lMvDEBEyZglw1ttvBoahGkNiao7YH729Msxa0fDHFElYk1NYGK1i3kXFxj4ChHhP6bs63spWfUDm4SNQbfukM6nnlYxa_jPJUnloIdZ0lVA9x6rCw-ePY6rbTOjDMdxqwCnn-jCB1oHRoJjsmC9i_01T3fdd9el2Q6iJ-rVuzPyS1IsR7emO-H1irhk74QifyKRTHi7Jr-lMJNDF2C4CFiSuGil9xNI-2scDBoH7pN4wnEMltKMZS2ExzaRzA8mSw1TKMqdMMxJQ6f_Vao2P39O9ZyPA-pgdi5fVCm-HzBBCVdsDf2WpdoSxT54Lrba1ouv-enM0T1M5hm-CHWOWHOlsTTKmFLrdFB8bUhhBkr-naMzxKD7_-qvoHtPQskygf2Xq8owGgoqGjrh3aDTEWc0JbZLw6Vgyy3h86VbJpgyQlLnMEqTX6ia8LNkt74CX-1tVhIo3iSkirm44MenBpTr36m10RyJOMCOgX91Bj`,
  },
};

export const signUp = (credentials) => {
  const requestBody = {
    Email: credentials.email,
    Password: credentials.confirmPassword,
    ConfirmPassword: credentials.password,
  };
  return (dispatch, getState) => {
    dispatch({ type: 'REGISTER_USER_STARTED' });

    axios
      .post(
        `https://allergyappipb.azurewebsites.net/api/Account/Register`,
        requestBody
      )

      .then((res) => {
        dispatch({
          type: 'REGISTER_USER_SUCCESS',
        });
      })
      .catch(function (err) {
        dispatch({ type: 'REGISTER_USER_ERROR', err });
      });
  };
};

export const signIn = (credentials) => {
  const requestBody = {
    grant_type: 'password',
    username: credentials.email,
    password: credentials.password,
  };
  return (dispatch, getState) => {
    dispatch({ type: 'AUTH_USER_STARTED' });

    axios
      .post(
        `https://allergyappipb.azurewebsites.net/token`,
        qs.stringify(requestBody),
        config
      )
      .then((res) => {
        dispatch({
          type: 'AUTH_USER_SUCCESS',
          credentials: res.data,
        });
      })
      .catch(function (err) {
        dispatch({ type: 'AUTH_USER_ERROR', err });
      });
  };
};

export const signOut = () => {
  return (dispatch, getState) => {
    dispatch({ type: 'SIGNOUT_USER' });
  };
};
