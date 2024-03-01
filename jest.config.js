module.exports = {
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
  
  collectCoverage: true,
  coverageReporters: ['text', 'cobertura'],

  testEnvironment: 'node',
};
