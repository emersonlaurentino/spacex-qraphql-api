const axios = require('axios');
const baseUrl = 'https://api.spacexdata.com/v2';
const getUrl = endpoint => `${baseUrl}/${endpoint}?id=true`;
const getData = ({ data }) => data;

const resolvers = {
  Query: {
    launches: (_, { input }) => {
      const url = (() => {
        if (input.orderBy) {
          return `${getUrl('launches')}&order=${input.orderBy.toLowerCase()}`;
        }

        return getUrl('launches');
      })();

      return axios.get(url).then(getData);
    },
  },
};

module.exports = resolvers;
