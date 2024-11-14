// jest.setup.js
import '@testing-library/jest-dom/extend-expect';

// Polyfill structuredClone
if (typeof global.structuredClone === 'undefined') {
  global.structuredClone = (value) => {
    return JSON.parse(JSON.stringify(value));
  };
}
