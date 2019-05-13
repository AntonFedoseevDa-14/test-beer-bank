import axios from 'axios';

axios.defaults.baseURL = 'https://api.punkapi.com/v2/';

function urlWithParams(url, params) {
  let paramsStr = '';

  let first = true;
  Object.keys(params).forEach(key => {
    paramsStr += first ? '?' : '&';
    paramsStr += key;
    paramsStr += '=';
    paramsStr += encodeURIComponent(String(params[key]));

    first = false;
  });

  return url + paramsStr;
}

const getBeers = params => {
  const apiPath = urlWithParams('/beers', params);

  return axios.get(apiPath);
};

export default {
  beer: {
    getList: getBeers,
  }
};
