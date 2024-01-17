// Mocking Math random
global.Math.random = () => 0.5;

// Fail tests on warnings, not only errors
// console.error = message => {
//   throw new Error(message);
// };

// Suppress Console output from tested code to terminal
console.warn = jest.fn();
console.error = jest.fn();

// use-resize-observer is used by Salt design system
global.ResizeObserver = class MockedResizeObserver {
  observe = jest.fn();
  unobserve = jest.fn();
  disconnect = jest.fn();
};
