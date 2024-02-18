module.exports = {
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
  testEnvironment: 'node',
  "extensionsToTreatAsEsm": [".mjs"]
};
