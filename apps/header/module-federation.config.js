const baseConfig = require('../../module-federation.config');

module.exports = {
  ...baseConfig,
  name: 'header',
  exposes: {
    './Module': './src/remote-entry.ts',
  },
};
