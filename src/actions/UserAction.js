import {
  FETCH_USER_LIST_ACTION,
  BASEAPI,
  userList,
} from '../statics/GlobalStatics';

import Api from '../lib/API/index';

export const FetchUserList = payload => {
  return async dispatch => {
    let res = await Api(userList, null, 'get', null);

    if (res.title == 'succes') {
      dispatch({
        type: FETCH_USER_LIST_ACTION,
        payload: res.json.data,
      });
    } else if (res.title == 'error') {
      alert('There is problem with web server side');
    }
  };
};
