import {LOADER_ACTION} from '../statics/GlobalStatics';

export const LoaderFire = payload => {
  return {
    type: LOADER_ACTION,
    payload,
  };
};
