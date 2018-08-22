const axios = require('axios');
const { getData, getUrl } = require('../utils');

module.exports = {
  launches: (_, { order, scope }) => {
    const url = (() => {
      const baseScope = `${getUrl(
        `launches${scope ? `/${scope}` : ''}`
      )}?id=true`;

      if (order) {
        return `${baseScope}&order=${order.toLowerCase()}`;
      }

      console.log(baseScope);

      return baseScope;
    })();

    if (scope === 'latest' || scope === 'next') {
      return [axios.get(url).then(getData)];
    }

    return axios.get(url).then(getData);
  },
  launch: (_, { id }) => {
    const url = `${getUrl('launches')}&flight_id=${id}`;

    return axios.get(url).then(({ data }) => data[0]);
  },
};
