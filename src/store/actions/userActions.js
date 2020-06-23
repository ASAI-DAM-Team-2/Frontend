import axios from "axios";
require("dotenv").config();

const config = {
  headers: {
    Authorization: `Bearer s8fpiWdhCdweFecvuTLLFcUGrutblcgP4XE-4SjZTy3nnEMNEpYEQxWD7X9hfEh4JywNRdiXSjR6DVbclqQl-0GtLGS_AQN3Ieo2lPnnVEV57fppcrfm-o8qYXpMdSBxnZyfK9Qd2v06CXKjWyH_wxic0Px7HtMFuB9EomQFjKI4iNXL4NZ0haD8cuqxIreZD_2fH6DR5S6gNoYT31Q6Zkn7bceNrWu5x6LqPn2lNrRfzdkolkC-upQXukRrma1QaXZSUbpM6nvgVj7CpylmnS81hq8JsHGp1lYsdZVVdO-daLXU-gQnldNXO7f44jfuffqKMzkuYXAkS1R9VXTIgKnee00TaFJk7VSbmPv4bUJ2Bu55BWdfra1UMERobpGsJVDeMylfDDfamfJiNkIUT5cOqxkkBNz4h1wrtDHRzqBfGlWJ717ElN1c3Z3UNFuzDjpF56DslxlNTZnT1XNkUr4STuztL8Mguf14UK7Wyps`,
  },
};

export const fetchUser = () => {
  return (dispatch, getState) => {
    const { authToken } = getState().auth;
    const header = {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    };
    dispatch({ type: "FETCH_USER_STARTED" });
    axios
      .get(
        `https://allergyappbackend.azurewebsites.net/api/account/userinfo`,
        header
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

export const updateUser = (user) => {
  return (dispatch, getState) => {
    const { authToken } = getState().auth;
    const header = {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    };
    //make async call to database
    dispatch({ type: "UPDATE_USER_STARTED" });
    axios
      .put(
        `https://allergyappbackend.azurewebsites.net/api/account/userinfo`,
        {
          Email: user.userEmail,
          Name: user.userName,
          Surname: user.userSurname,
        },
        header
      )
      .then((res) => {
        dispatch({
          type: "UPDATE_USER_SUCCESS",
          user: res.data,
        });
      })
      .catch((err) => {
        dispatch({ type: "UPDATE_USER_ERROR", err });
      });
  };
};
