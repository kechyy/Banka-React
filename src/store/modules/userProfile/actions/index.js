import React from 'react';
import axios from 'axios';
import * as Toastr from 'toastr';
import '@babel/polyfill';
import { GET_USER_PROFILE } from './actionTypes';


export const getUserProfileSuccess = profile => ({
  type: GET_USER_PROFILE,
  payload: {
    status: 'getUserProfileSuccess',
    profile
  }
});

export const profileAction = () => async dispatch => {
  try {
    
    const response = await axios({
      method: 'get',
      url: 'https://kechyy-banka-app.herokuapp.com/api/v1/user/profile',
      headers: {
        Authorization: localStorage.getItem('Authorization')
      }
    }); 
    dispatch(getUserProfileSuccess(response.data.data));
  } catch (error) {
    const message = error.response
      ? error.response.data.error
      : `${error.message}. It appears you're offline`;
    Toastr.error(message);
  }
};

