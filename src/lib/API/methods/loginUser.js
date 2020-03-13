import Api from '../index';
import {LOGINUSER} from '../../../statics/GlobalStatics';

export default function loginUser(username, password) {
  let data = {
    username,
    password,
  };
  return Api(LOGINUSER, data, 'post', null);
}
