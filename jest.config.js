module.exports = {
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
  // Specify Babel options for Jest
  #babel: {
   # presets: ['@babel/preset-env'],
    // other Babel options...
  #},
  testEnvironment: 'node',
};
