import {LOADER_ACTION} from '../statics/GlobalStatics';

export default (state = true, action) => {
  switch (action.type) {
    case LOADER_ACTION:
      let a = action.payload;
      return a;

    default:
      return state;
  }
};
