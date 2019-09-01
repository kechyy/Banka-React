import React from 'react';
import axios from 'axios';
import * as Toastr from 'toastr';
import '@babel/polyfill';
import { GET_TRANSACTION_SUCCESS } from './actionTypes';



export const getTransactionSuccess = transaction => ({
  type: GET_TRANSACTION_SUCCESS,
  payload: {
    status: 'transactionSuccess',
    transaction
  }
});
export const getTransactionFailure = error => ({
  type: GET_TRANSACTION_FAILURE,
  payload: {
    status: 'rest',
    error
  }
});

export const getTransactionAction = (accountNumber) => async dispatch => {
  try {
    const response = await axios({
      method: 'get',
      url: `https://kechyy-banka-app.herokuapp.com/api/v1/user/accounts/${accountNumber}/transactions`,
      headers: {
        Authorization: localStorage.getItem('Authorization')
      }
    });
    dispatch(getAccountSuccess(response.data.data));
  } catch (error) {
    const message = error.response
      ? error.response.data.error
      : `${error.message}. It appears you're offline`;
      dispatch(getTransactionFailure(message))
    // Toastr.error(message);
  }
};

