const { capsules, capsule } = require('./capsules');
const { info, roadster, history } = require('./info');
const { launches, launch } = require('./launches');
const { rockets, rocket } = require('./rockets');
const { launchpads, launchpad } = require('./launchpads');

const resolvers = {
  Query: {
    capsule,
    capsules,
    history,
    info,
    launch,
    launches,
    launchpad,
    launchpads,
    roadster,
    rocket,
    rockets,
  },
};

module.exports = resolvers;
