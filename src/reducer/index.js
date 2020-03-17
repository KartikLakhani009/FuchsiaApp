import {combineReducers} from 'redux';
import {reducer as FormReducer} from 'redux-form';
import UserReducer from './UserReducer';
import LoaderReducer from './LoaderReducer';

export default combineReducers({
  // USERAUTH: UserReducer,
  form: FormReducer,
  user: UserReducer,
  Loader: LoaderReducer,
});
