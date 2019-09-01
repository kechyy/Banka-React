import { MODAL_DISPLAY } from '../actions/actionTypes'; 
const initialState = {
  signinDisplay: 'none',
  signupDisplay: 'none',
  page: '',
  
};

const modalStatus = (state = initialState, action) => {
  const {
    payload: { signinDisplay, signupDisplay, page} = {}
  } = action;
  switch (action.type) {
    case  MODAL_DISPLAY:
      return {
        ...state,
        signinDisplay,
        signupDisplay,
        page
      };
    
    default:
      return state;
  }
};

export default modalStatus;
