const { sendEmail } = require('../notifications/email');

const notifyUser = async (user, message) => {
  if (!user.email) {
    throw new Error('User does not have an email address.');
  }
  await sendEmail(user.email, 'Notification', message);
  console.log(`Notification sent to ${user.email}`);
};

module.exports = { notifyUser };