import {combineReducers} from 'redux';
import {reducer as FormReducer} from 'redux-form';
import UserReducer from './UserReducer';

export default combineReducers({
  // USERAUTH: UserReducer,
  form: FormReducer,
  user: UserReducer,
});
