import { GET_USER_PROFILE } from '../actions/actionTypes';

const initialState = {
  profile: {},
  status: 'rest'
};


const userTypes = [GET_USER_PROFILE];
const profileReducer = (state = initialState, { type, payload }) => {
  return userTypes.includes(type) ? { ...state, ...payload } : state;
};
export default profileReducer;
