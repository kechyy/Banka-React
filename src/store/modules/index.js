import { combineReducers } from 'redux';
import authReducer from './auth/reducers';
import modalStatus from './modals/reducer';
import profileReducer from './userProfile/reducer';
import accountReducer from './bankAccount/reducer';
import transactionReducer from './transaction/reducer'
import logoutReducer from './logout/reducer';


export default combineReducers({
  authReducer,
  modalStatus,
  profileReducer,
  accountReducer,
  logoutReducer,
  transactionReducer
});