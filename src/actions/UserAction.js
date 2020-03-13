import {
  FETCH_USER_LIST_ACTION,
  BASEAPI,
  userList,
} from '../statics/GlobalStatics';

export const FetchUserList = payload => {
  return async dispatch => {
    await fetch(BASEAPI + userList)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else console.error('Error : ', response);
      })
      .then(json => {
        // console.log(json);
        dispatch({
          type: FETCH_USER_LIST_ACTION,
          payload: json.data,
        });
      })
      .catch(error => console.error('error', error));
  };
};
