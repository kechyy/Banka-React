import { AUTH_PENDING, AUTH_SUCCESS, AUTH_FAILURE } from '../actions/actionTypes';

export const initialState = {
  user: {},
  status: 'rest',
  error: 'null',
  isAuthenticated: false,
};


const authTypes = [AUTH_PENDING, AUTH_FAILURE, AUTH_SUCCESS];
const authReducer = (state = initialState, { type, payload }) => {
  return authTypes.includes(type) ? { ...state, ...payload } : state;
};
export default authReducer;
