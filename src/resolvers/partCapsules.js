const axios = require('axios');
const { getData, getUrl, addOrderSort } = require('../utils');

module.exports = {
  partCapsules: (_, { order, sort }) => {
    const url = (() => {
      const baseScope = getUrl(`parts/caps`);

      if (order || sort) {
        return addOrderSort({ baseScope, order, sort });
      }

      return baseScope;
    })();

    return axios.get(url).then(getData);
  },
  partCapsule: (_, { id }) => {
    const url = `${getUrl('parts/caps')}/${id}`;

    return axios.get(url).then(getData);
  },
};
