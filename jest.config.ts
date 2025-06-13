import type { Config } from "jest";
const config: Config = {
    preset: "ts-jest", //testing with typescript
    testEnvironment: "node", //testing in a node environment
    roots: ["<rootDir>/tests"], //list of directories to look for tests inside
    testMatch: ["<rootDir>/tests/**/*.ts"], //specifying the files thar are for testing. test files should end with .test.ts inside <rootDir>/tests
    testPathIgnorePatterns: ["/node_modules/"],
    verbose: true, //showing all the tests that are run with detailed explanation of what's happening
    collectCoverage: true, //collecting coverage information
    collectCoverageFrom: [
        "<rootDir>/src/**/*.ts", //collecting coverage from all .ts files inside /src (** means all subdirectories)
    ],
    coverageDirectory: "coverage", //directory where the coverage information (report) will be stored
    coverageThreshold: {
        // Specifies the coverage threshold levels
        global: {
            functions: 85, //minimum percentage of functions that should be covered by tests
            statements: 75,
        },
    },
};
export default config; //exporting the config so that jest can use it
