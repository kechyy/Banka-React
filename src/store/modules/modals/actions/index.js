import { MODAL_DISPLAY } from './actionTypes';

export const modalDisplay =  (signinDisplay, signupDisplay, page) => ({
  type: MODAL_DISPLAY,
  payload: { signinDisplay, signupDisplay, page: page}
})
export const modalToggle = () =>  dispatch => {
    dispatch(modalDisplay('block', 'none', 'signin'));
};
export const modalToggle2 = () =>  dispatch => {
  dispatch(modalDisplay('none', 'block', 'signup'));
};
export const closeSignInModal = () =>  dispatch => {
  dispatch(modalDisplay('none',  'signin'));
};
export const closeModal = () =>  dispatch => {
  dispatch(modalDisplay('none', 'none', ''));
};