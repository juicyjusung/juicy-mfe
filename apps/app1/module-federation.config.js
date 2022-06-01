const baseConfig = require('../../module-federation.config');

module.exports = {
  ...baseConfig,
  name: 'app1',
  exposes: {
    './Module': './src/remote-entry.ts',
  },
};
