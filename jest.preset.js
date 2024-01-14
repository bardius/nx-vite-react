const nxPreset = require('@nx/jest/preset').default;

module.exports = {
  ...nxPreset,

  verbose: true,
  prettierPath: 'prettier',
  coverageDirectory: '<rootDir>/reports/coverage',
  coverageReporters: [['lcov', { projectRoot: '/' }], 'text', 'text-summary', 'clover', 'html'],
  reporters: [
    'default',
    [
      'jest-sonar',
      {
        outputDirectory: '<rootDir>/reports/sonar',
        outputName: 'results-report.xml',
        reportedFilePath: 'absolute',
        relativeRootDir: './',
      },
    ],
    [
      'jest-junit',
      {
        suiteName: 'Unit tests',
        outputDirectory: '<rootDir>/reports/junit',
        outputName: './results-report.xml',
        usePathForSuiteName: 'true',
      },
    ],
  ],
  testPathIgnorePatterns: ['__mocks__', '__fixtures__'],
  coveragePathIgnorePatterns: ['\\\\node_modules\\\\', '\\\\__tests__\\\\'],
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0,
    },
  },
  testEnvironmentOptions: {
    ...nxPreset.testEnvironmentOptions,
    url: 'http://www.test-host.com',
    runScripts: 'dangerously',
    resources: 'usable',
  },
  setupFilesAfterEnv: ['../../jest/jest.setup-dom.js'],
  setupFiles: ['jest-date-mock', '../../jest/jest.polyfills.js'],
  cacheDirectory: '../../node_modules/.cache/unit-tests',
  clearMocks: true,
  globalSetup: '../../jest/jest.global-setup.js',
};
