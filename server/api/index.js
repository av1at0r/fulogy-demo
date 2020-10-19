import sharedApi from '../../shared/api';
import getToken from '../../shared/utils/getToken';


export default function api(url, options) {
  return sharedApi(url, {
    ...options,
    headers: {
      ...options.headers,
      'x-token-access': getToken()
    },
  });

}
