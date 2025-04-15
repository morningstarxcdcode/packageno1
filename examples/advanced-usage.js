const express = require('express');
const { authMiddleware } = require('../middleware/auth');
const { loggerMiddleware } = require('../middleware/logger');
const { config } = require('../src/index');
const { sendEmail } = require('../notifications/email');
const { encrypt, decrypt } = require('../security/encryption');
const { hashPassword, comparePassword } = require('../utils/hash');

const app = express();

// Use middleware
app.use(loggerMiddleware);
app.use(authMiddleware);

app.get('/', (req, res) => {
  res.send(`Hello, authenticated user! Environment: ${config.env}`);
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

(async () => {
  const data = await fetchData('https://api.example.com/data');
  console.log('Fetched Data:', data);

  // Email example
  await sendEmail('test@example.com', 'Welcome!', 'Thank you for joining us!');

  // Encryption example
  const secret = 'mySecretKey';
  const encrypted = encrypt('Sensitive Data', secret);
  console.log('Encrypted:', encrypted);
  console.log('Decrypted:', decrypt(encrypted, secret));

  // Hashing example
  const password = 'myPassword123';
  const hash = await hashPassword(password);
  console.log('Password Hash:', hash);
  console.log('Password Match:', await comparePassword(password, hash));
})();