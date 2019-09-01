import React from 'react';
import '@babel/polyfill'
import { LOGOUT} from './actionTypes';

export const logoutSuccess = () => ({
  type: LOGOUT,
  payload: {
    status: 'logoutSuccessful',
    error: null,
    user: {},
    isAuthenticated: false
  }
});



export const logoutAction = () => async dispatch => {
    localStorage.clear();
    dispatch(logoutSuccess());
};

