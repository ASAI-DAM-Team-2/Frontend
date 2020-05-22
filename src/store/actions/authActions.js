import axios from 'axios';
var qs = require('qs');
const config = {
  headers: {
    'Content-type': 'application/x-www-form-urlencoded',
  },
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
        `https://allergyappbackend.azurewebsites.net/token`,
        qs.stringify(requestBody),
        config
      )
      .then((res) => {
        dispatch({
          type: 'AUTH_USER_SUCCESS',
          restaurants: res.data,
        });
      })
      .catch(function (err) {
        dispatch({ type: 'AUTH_USER_ERROR', err });
      });
  };
};
