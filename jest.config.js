module.exports = {
  bail: 1,
  coveragePathIgnorePatterns: ['/node_modules/'],
  globals: {
    NODE_ENV: 'test',
  },
  testMatch: ['**/*.(spec|test).js'],
  verbose: true,
}
