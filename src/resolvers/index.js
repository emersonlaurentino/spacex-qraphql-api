const { rockets, rocket } = require('./rockets');
const { launches, launch } = require('./launches');

const resolvers = {
  Query: {
    rockets,
    rocket,
    launches,
    launch,
  },
};

module.exports = resolvers;
