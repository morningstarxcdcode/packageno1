const { createUser, verifyUser } = require('../../services/userService');

describe('User Service', () => {
  test('should create a user with a hashed password', async () => {
    const userData = { username: 'testuser', password: 'password123' };
    const user = await createUser(userData);
    expect(user.password).not.toBe(userData.password);
  });

  test('should verify a user with the correct password', async () => {
    const userData = { username: 'testuser', password: 'password123' };
    const user = await createUser(userData);
    const isValid = await verifyUser(user, 'password123');
    expect(isValid).toBe(true);
  });

  test('should not verify a user with an incorrect password', async () => {
    const userData = { username: 'testuser', password: 'password123' };
    const user = await createUser(userData);
    const isValid = await verifyUser(user, 'wrongpassword');
    expect(isValid).toBe(false);
  });
});