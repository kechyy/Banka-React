import {
  ACCOUNT_PENDING,
  ACCOUNT_SUCCESS,
  ACCOUNT_FAILURE,
  GET_ACCOUNT_SUCCESS,
} from '../actions/actionTypes';

export const initialState = {
  account: [],
  error: null,
  status: 'rest'
};

const accountReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ACCOUNT_PENDING:
    case ACCOUNT_FAILURE:
    case GET_ACCOUNT_SUCCESS:
      return {
        ...state,
        ...payload
      };
    case ACCOUNT_SUCCESS:
      return {
        ...state,
        ...payload,
        account: [payload.account, ...state.account]
      };
    default:
      return state;
  }
};

export default accountReducer;