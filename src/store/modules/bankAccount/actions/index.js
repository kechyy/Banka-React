import React from 'react';
import axios from 'axios';
import * as Toastr from 'toastr';
import '@babel/polyfill';
import { ACCOUNT_PENDING, ACCOUNT_SUCCESS, ACCOUNT_FAILURE, GET_ACCOUNT_SUCCESS } from './actionTypes';

export const AccountPending = () => ({
  type: ACCOUNT_PENDING,
  payload: {
    status: 'createAccountPending',
    error: null,
  }
});

export const AccountSuccess = account => ({
  type: ACCOUNT_SUCCESS,
  payload: {
    status: 'createAccountSuccess',
    error: null,
    account
  }
});

export const AccountFail = error => ({
  type: ACCOUNT_FAILURE,
  payload: {
    status: 'createAccountFail',
    error,
  }
});
export const getAccountSuccess = account => ({
  type: GET_ACCOUNT_SUCCESS,
  payload: {
    status: 'getAccountSuccess',
    account
  }
});

export const accountAction = (accountDatails) => async dispatch => {
  dispatch(AccountPending());
  
  try {
    const response = await axios({
      method: 'post',
      url: 'https://kechyy-banka-app.herokuapp.com/api/v1/user/account',
      headers: {
        Authorization: localStorage.getItem('Authorization')
      },
      data: accountDatails
    });
    Toastr.success('Account successfully created');
    dispatch(AccountSuccess(response.data.data));
    
    

  } catch (error) {
    const message = error.response
      ? error.response.data.error
      : `${error.message}. It appears you're offline`;
    Toastr.error(message);
    dispatch(AccountFail(message));
  }
};
export const getAccountAction = () => async dispatch => {
  try {
    const response = await axios({
      method: 'get',
      url: 'https://kechyy-banka-app.herokuapp.com/api/v1/user/userAccounts',
      headers: {
        Authorization: localStorage.getItem('Authorization')
      }
    });
    dispatch(getAccountSuccess(response.data.data));
  } catch (error) {
    const message = error.response
      ? error.response.data.error
      : `${error.message}. It appears you're offline`;
    // Toastr.error(message);
  }
};

