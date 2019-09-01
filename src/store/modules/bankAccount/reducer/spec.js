import accountReducer, { initialState } from './index';
import { AccountPending, AccountSuccess, AccountFail } from '../actions';

let action;
let newState;
const account = {type: 'savings'};
const error = '';
describe('Auth Reducer', () => {
  it('should return initial state for unknown action types', () => {
    action = { type: null };
    newState = accountReducer(initialState, action);
    expect(newState).toEqual(initialState);
    expect(newState.error).toEqual(null);
    expect(newState.status).toEqual('rest');
    expect(newState.account).toEqual([]);
  });
  it('should handle action with type ACCOUNT_PENDING', () => {
    const { type, payload } = AccountPending();
    newState = accountReducer(initialState, { type, payload });
    expect(type).toEqual('ACCOUNT_PENDING');
    expect(payload.status).toEqual('createAccountPending');
    expect(payload.error).toEqual(null);
  });
  it('should handle action with type ACCOUNT_SUCCESS', () => {
    const { type, payload } = AccountSuccess(account);
    newState = accountReducer(initialState, { type, payload });
    expect(type).toEqual('ACCOUNT_SUCCESS');
    expect(payload.status).toEqual('createAccountSuccess');
    expect(payload.error).toEqual(null);
    expect(payload.account).toEqual(account);
  });
  it('should handle action with type ACCOUNT_FAILURE', () => {
    const { type, payload } = AccountFail(error);
    newState = accountReducer(initialState, { type, payload });
    expect(type).toEqual('ACCOUNT_FAILURE');
    expect(payload.status).toEqual('createAccountFail');
    expect(payload.error).toEqual(error);
  });
});