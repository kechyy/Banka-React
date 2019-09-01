import { GET_TRANSACTION_SUCCESS, GET_TRANSACTION_FAILURE } from '../actions/actionTypes';

const initialState = {
  transaction: [],
  status: 'rest',
  error: null
};


const transactionTypes = [GET_TRANSACTION_SUCCESS, GET_TRANSACTION_FAILURE];
const transactionReducer = (state = initialState, { type, payload }) => {
  return transactionTypes.includes(type) ? { ...state, ...payload } : state;
};
export default transactionReducer;