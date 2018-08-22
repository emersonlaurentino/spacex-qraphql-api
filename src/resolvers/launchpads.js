const axios = require('axios');
const { getData, getUrl } = require('../utils');

module.exports = {
  launchpads: () => {
    const url = getUrl('launchpads');

    return axios.get(url).then(getData);
  },
  launchpad: (_, { id }) => {
    const url = `${getUrl('launchpads')}/${id}`;

    return axios.get(url).then(getData);
  },
};
