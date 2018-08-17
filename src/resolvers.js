const axios = require('axios');
const baseUrl = 'https://api.spacexdata.com/v2';
const getUrl = endpoint => `${baseUrl}/${endpoint}`;

const resolvers = {
  Query: {
    launches: () => axios.get(getUrl('launches')).then(({ data }) => data),
  },
};

module.exports = resolvers;
