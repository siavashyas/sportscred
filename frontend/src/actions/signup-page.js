import { SIGNUP_STARTED, SIGNUP_SUCCEEDED, SIGNUP_FAILED } from "../constants";
import { toggleAuthPage } from "./auth-page";
import { signupRequest } from "../api/signup-page";

export const signupStarted = () => ({
  type: SIGNUP_STARTED,
});

export const signupSuccess = (username) => ({
  type: SIGNUP_SUCCEEDED,
  username,
});

export const signupFailed = (reason) => ({
  type: SIGNUP_FAILED,
  reason,
});

export function signup(data) {
  return function (dispatch) {
    dispatch(signupStarted());
    return signupRequest(data)
      .then(function (response) {
        dispatch(signupSuccess(data.username));
        dispatch(toggleAuthPage());
      })
      .catch(function (error) {
        if (error.response) {
          dispatch(signupFailed(error.response.data));
        } else if (error.request) {
          dispatch(signupFailed("Unable to reach server"));
        } else {
          dispatch(signupFailed("Internal server error"));
        }
      });
  };
}