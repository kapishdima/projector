/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
require('tsconfig-paths/register');

const tsconfig = './src/server/tsconfig.json';

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    '^@domains/(.*)$': '<rootDir>/src/server/domains/$1',
    '^@database/(.*)$': '<rootDir>/src/server/database/$1',
    '^@di/(.*)$': '<rootDir>/src/server/di/$1',
    '^@http/(.*)$': '<rootDir>/src/server/http/$1',
  },
  globals: {
    'ts-jest': {
      tsconfig,
    },
  },
};
