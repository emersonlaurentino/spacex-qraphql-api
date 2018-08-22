const axios = require('axios');
const { getData, getUrl } = require('../utils');

module.exports = {
  info: () => {
    const url = getUrl('info');

    return axios.get(url).then(getData);
  },
  roadster: () => {
    const url = getUrl('info/roadster');

    return axios.get(url).then(getData);
  },
  history: () => {
    const url = getUrl('info/history');

    return axios.get(url).then(getData);
  },
};
