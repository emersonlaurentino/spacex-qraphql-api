const { capsules, capsule } = require('./capsules');
const { info, roadster, history } = require('./info');
const { launches, launch } = require('./launches');
const { launchpads, launchpad } = require('./launchpads');
const { partCapsules, partCapsule } = require('./partCapsules');
const { partCores, partCore } = require('./partCores');
const { rockets, rocket } = require('./rockets');

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
    partCapsule,
    partCapsules,
    partCore,
    partCores,
    roadster,
    rocket,
    rockets,
  },
};

module.exports = resolvers;
