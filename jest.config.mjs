export default {
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
  testEnvironment: 'node',
  "extensionsToTreatAsEsm": [".mjs"]
};
