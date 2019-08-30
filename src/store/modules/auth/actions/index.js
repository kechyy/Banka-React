import React from 'react';
import axios from 'axios';
import * as Toastr from 'toastr';
import '@babel/polyfill';
import { saveToLocalStorage, decodeToken } from '../../../../utils';
import { AUTH_PENDING, AUTH_SUCCESS, AUTH_FAILURE } from './actionTypes';

export const authPending = () => ({
  type: AUTH_PENDING,
  payload: {
    status: 'authenticationPending',
    error: null,
    user: {},
    isAuthenticated: false
  }
});

export const authSuccess = user => ({
  type: AUTH_SUCCESS,
  payload: {
    status: 'authenticationSuccess',
    error: null,
    user,
    isAuthenticated: true
  }
});

export const authFailure = error => ({
  type: AUTH_FAILURE,
  payload: {
    status: 'authenticationFail',
    error,
    user: {},
    isAuthenticated: false
  }
});

export const authAction = ({
  userData,
  history,
  url = undefined
}) => async dispatch => {
  const { firstName, lastName, email, password, cpassword } = userData;
  dispatch(authPending());

  try {
    const authRoute = firstName ? 'signup' : 'signin';

    const details = firstName
      ? { firstName, lastName, email, password, cpassword }
      : { email, password };
    const response = await axios({
      method: 'post',
      url: `https://kechyy-banka-app.herokuapp.com/api/v1/user/auth/${authRoute}`,
      data: details
    });
    const { token } = response.data.data;

    saveToLocalStorage({ token, url });

    const user = decodeToken({ history });
    Toastr.success('Welcome to BankApp!');
    dispatch(authSuccess(user));

    return url ? history.push(url) : history.push('/');
  } catch (error) {
    console.log(error.response)
    const message = error.response
      ? error.response.data.error
      : `${error.message}. It appears you're offline`;
    Toastr.error(message);
    dispatch(authFailure(message));
  }
};

