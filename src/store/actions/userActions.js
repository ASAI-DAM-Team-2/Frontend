import axios from 'axios';
require('dotenv').config();

export const fetchUser = () => {
  return (dispatch, getState) => {
    const { authToken } = getState().auth;
    const header = {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    };
    dispatch({ type: 'FETCH_USER_STARTED' });
    axios
      .get(
        `http://allergyappipb.azurewebsites.net/api/account/userinfo`,
        header
      )
      .then((res) => {
        dispatch({
          type: 'FETCH_USER_SUCCESS',
          user: res.data,
        });
      })
      .catch(function (err) {
        dispatch({ type: 'FETCH_USER_ERROR', err });
      });
  };
};

export const updateUser = (user) => {
  return (dispatch, getState) => {
    const { authToken } = getState().auth;
    const header = {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    };
    //make async call to database
    dispatch({ type: 'UPDATE_USER_STARTED' });
    axios
      .put(
        `http://allergyappipb.azurewebsites.net/api/account/userinfo`,
        {
          Email: user.userEmail,
          Name: user.userName,
          Surname: user.userSurname,
        },
        header
      )
      .then((res) => {
        dispatch({
          type: 'UPDATE_USER_SUCCESS',
          user: res.data,
        });
      })
      .catch((err) => {
        dispatch({ type: 'UPDATE_USER_ERROR', err });
      });
  };
};
