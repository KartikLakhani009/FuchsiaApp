import {FETCH_USER_LIST_ACTION} from '../statics/GlobalStatics';

const userdata = {
  users: [],
  firstTime: false,
};

export default (state = userdata, action) => {
  switch (action.type) {
    case FETCH_USER_LIST_ACTION:
      let list = action.payload;
      if (list) {
        alert('List Is Empty');
      }
      return {...state, users: list, firstTime: true};
    default:
      return state;
  }
};
