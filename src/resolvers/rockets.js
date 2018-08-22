const axios = require('axios');
const { getData, getUrl } = require('../utils');

module.exports = {
  rockets: (_, { order }) => {
    const url = (() => {
      const baseScope = getUrl('rockets');

      if (order) {
        return `${baseScope}&order=${order.toLowerCase()}`;
      }

      return baseScope;
    })();

    return axios.get(url).then(getData);
  },
  rocket: (_, { id }) => {
    const url = `${getUrl('rockets')}/${id}`;

    return axios.get(url).then(getData);
  },
};
