const axios = require('axios');
const { getData, getUrl, addOrderSort } = require('../utils');

module.exports = {
  launches: (_, { scope, order, sort }) => {
    const url = (() => {
      const baseScope = `${getUrl(
        `launches${scope ? `/${scope}` : ''}`
      )}?id=true`;

      if (order || sort) {
        return addOrderSort({ baseScope, order, sort });
      }

      return baseScope;
    })();

    if (scope === 'latest' || scope === 'next') {
      return [axios.get(url).then(getData)];
    }

    return axios.get(url).then(getData);
  },
  launch: (_, { id }) => {
    const url = `${getUrl('launches')}?id=true&flight_id=${id}`;

    return axios.get(url).then(({ data }) => data[0]);
  },
};
