const { capsules, capsule } = require('./capsules');
const { info, roadster, history } = require('./info');
const { launches, launch } = require('./launches');
const { rockets, rocket } = require('./rockets');

const resolvers = {
  Query: {
    capsule,
    capsules,
    history,
    info,
    launch,
    launches,
    roadster,
    rocket,
    rockets,
  },
};

module.exports = resolvers;
