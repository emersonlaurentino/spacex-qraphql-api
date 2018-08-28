const axios = require('axios');
const { getData, getUrl, addOrderSort } = require('../utils');

module.exports = {
  partCores: (_, { order, sort }) => {
    const url = (() => {
      const baseScope = getUrl(`parts/cores`);

      if (order || sort) {
        return addOrderSort({ baseScope, order, sort });
      }

      return baseScope;
    })();

    return axios.get(url).then(getData);
  },
  partCore: (_, { id }) => {
    const url = `${getUrl('parts/cores')}/${id}`;

    return axios.get(url).then(getData);
  },
};
