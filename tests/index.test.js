import { greet, calculateSum, fetchData } from '../src/index';
const { config } = require('../src/index');
const { isEmail } = require('../utils/validator');

test('greet function', () => {
  expect(greet('Morningstar')).toBe('Hello, Morningstar! Welcome to the advanced package.');
});

test('calculateSum function', () => {
  expect(calculateSum(2, 3)).toBe(5);
});

test('fetchData function', async () => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve({ data: 'test data' })
    })
  );

  const data = await fetchData('https://api.example.com');
  expect(data).toEqual({ data: 'test data' });
});

test('Configuration loader', () => {
  expect(config.env).toBeDefined();
});

test('Email validator', () => {
  expect(isEmail('test@example.com')).toBe(true);
  expect(isEmail('invalid-email')).toBe(false);
});