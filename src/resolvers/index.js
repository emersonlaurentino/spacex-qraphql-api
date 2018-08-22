const { rockets, rocket } = require('./rockets');
const { launches, launch } = require('./launches');
const { capsules, capsule } = require('./capsules');

const resolvers = {
  Query: {
    rockets,
    rocket,
    launches,
    launch,
    capsules,
    capsule,
  },
};

module.exports = resolvers;
