module.exports = {
  preset: 'jest-preset-angular',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: [
    '<rootDir>/setup-jest.ts'
  ],
  moduleNameMapper: {
    '@core/(.*)': '<rootDir>/src/app/core/$1',
    '@env/(.*)': '<rootDir>/src/environments/$1',
    '@services/(.*)': '<rootDir>/src/app/services/$1',
    '@interfaces/(.*)': '<rootDir>/src/app/interfaces/$1',
    '@utils/(.*)': '<rootDir>/src/app/utils/$1',
    '^lodash-es$': 'lodash'
  },
  testMatch: [
    '<rootDir>/src/**/*.spec.ts'
  ],
  collectCoverage: false,
  collectCoverageFrom: [
    '**/src/**/*.ts',
    '!**/src/**/*.interface.ts',
    '!**/node_modules/**',
    '!**/e2e/**',
    '!**/src/**/*.module.ts',
    '!test/**',
    '!**/polyfills.ts',
    '!**/main.ts',
    '!**/environments/**',
    '!**/src/setupJest.ts'
  ]
}
