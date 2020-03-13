// General api to access data
import {BASEAPI} from '../../statics/GlobalStatics';
export default function api(path, params, method, token) {
  let options;
  options = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      ...(token && {token: token}),
    },
    method: method,
    ...(params && {body: JSON.stringify(params)}),
  };

  return fetch(BASEAPI + path, options)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else console.error('Error : ', response);
    })
    .then(json => {
      console.log('API Data : ', json);
      return json;
    })
    .catch(error => {
      console.error('API Error :', error);
      return error;
    });
}
