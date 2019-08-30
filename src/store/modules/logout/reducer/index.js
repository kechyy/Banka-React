import { LOGOUT } from '../actions/actionTypes';

const initialState = {
  user: {},
  status: 'rest',
  error: 'null',
  isAuthenticated: false,
};


const logoutTypes = [LOGOUT];
const logoutReducer = (state = initialState, { type, payload }) => {
  return logoutTypes.includes(type) ? { ...state, ...payload } : state;
};
export default logoutReducer;