import Api from '../index';
import {LOGINUSER} from '../../../statics/GlobalStatics';

export default async function loginUser(username, password) {
  let data = {
    username,
    password,
  };
  return await Api(LOGINUSER, data, 'post', null);
}
