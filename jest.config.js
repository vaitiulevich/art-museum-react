export const preset = 'ts-jest';
export const testEnvironment = 'node';
export const moduleFileExtensions = ['ts', 'tsx', 'js', 'jsx', 'json', 'node'];
export const testPathIgnorePatterns = ['/node_modules/', '/dist/'];
export const setupFilesAfterEnv = ['<rootDir>/src/setupTests.ts'];
