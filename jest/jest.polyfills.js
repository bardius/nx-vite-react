// Mocking Math random
global.Math.random = () => 0.5;

// Fail tests on warnings, not only errors
// console.error = message => {
//   throw new Error(message);
// };

// Suppress Console output from tested code to terminal
console.warn = jest.fn();
console.error = jest.fn();