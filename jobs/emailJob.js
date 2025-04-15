const { sendEmail } = require('../notifications/email');

const processEmailJob = async (job) => {
  const { to, subject, text } = job.data;
  await sendEmail(to, subject, text);
  console.log(`Processed email job for ${to}`);
};

module.exports = { processEmailJob };