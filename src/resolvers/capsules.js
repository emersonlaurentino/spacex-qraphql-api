const axios = require('axios');
const { getData, getUrl } = require('../utils');

module.exports = {
  capsules: () => {
    const url = getUrl('capsules');

    return axios.get(url).then(getData);
  },
  capsule: (_, { id }) => {
    const url = `${getUrl('capsules')}/${id}`;

    return axios.get(url).then(getData);
  },
};
