const { notifyUser } = require('../services/notificationService');
const { createUser } = require('../services/userService');

const runCLI = async () => {
  const user = await createUser({ username: 'cliuser', password: 'cli123' });
  console.log('User created:', user);

  await notifyUser({ email: 'cliuser@example.com' }, 'Welcome to the CLI!');
  console.log('Notification sent to CLI user.');
};

runCLI();