const baseConfig = require('../../module-federation.config');

module.exports = {
  ...baseConfig,
  name: 'app2',
  exposes: {
    './Module': './src/remote-entry.ts',
  },
};
