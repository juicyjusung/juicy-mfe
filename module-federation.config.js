const coreLibraries = new Set([
  'react',
  'react-dom',
  'react-router-dom',
  '@mui/material',
  '@emotion/react',
  '@emotion/styled'
]);

module.exports = {
  shared: (libraryName, defaultConfig) => {
    if (coreLibraries.has(libraryName)) {
      return defaultConfig;
    }
    return false;
  },
};
