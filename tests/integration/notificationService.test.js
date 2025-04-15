const { notifyUser } = require('../../services/notificationService');

describe('Notification Service', () => {
  test('should send a notification to a user with an email', async () => {
    const mockUser = { email: 'test@example.com' };
    const mockMessage = 'This is a test notification.';

    await expect(notifyUser(mockUser, mockMessage)).resolves.not.toThrow();
  });

  test('should throw an error if the user does not have an email', async () => {
    const mockUser = { email: null };
    const mockMessage = 'This is a test notification.';

    await expect(notifyUser(mockUser, mockMessage)).rejects.toThrow('User does not have an email address.');
  });
});