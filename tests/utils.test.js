const { isEmail } = require('../utils/validator');

test('isEmail function', () => {
  expect(isEmail('test@example.com')).toBe(true);
  expect(isEmail('invalid-email')).toBe(false);
});