import {combineReducers} from 'redux';
import {reducer} from 'redux-form';
// import UserReducer from './UserReducer';

export default combineReducers({
  // USERAUTH: UserReducer,
  form: reducer,
});
