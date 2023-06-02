const rootConfig = require('./jest.config.js');

module.exports = {
  ...rootConfig,
  ...{
    displayName: 'Unit Tests',
    coveragePathIgnorePatterns: [
      '/node_modules/',
      'src/api/',
      '__tests__/',
    ],
    testMatch: [
      '**/__tests__/**/*.unit.(spec|test).[jt]s?(x)',
    ],
    reporters: [
      'default',
      [
        'jest-junit',
        {
          outputDirectory: './',
          outputName: 'report.xml',
        },
      ],
    ],
  },
};
