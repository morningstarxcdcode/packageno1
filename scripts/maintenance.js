const logger = require('../utils/logger');
const cleanup = require('./cleanup');
const quotes = require('./quotes');
const { processEmailJob } = require('../jobs/emailJob');

logger.log('Starting maintenance tasks...');

// Run cleanup
cleanup();
logger.log('Cleanup completed.');

// Display a random quote
quotes();
logger.log('Displayed a random quote.');

(async () => {
  // Example email job
  const emailJob = { data: { to: 'test@example.com', subject: 'Maintenance Update', text: 'Maintenance completed successfully.' } };
  await processEmailJob(emailJob);
})();

logger.log('Maintenance tasks completed.');