const configLoader = require('./configLoader');
const logger = require('../utils/logger');
const cli = require('./cli');
const { connectDB } = require('../database/db');
const { notifyUser } = require('../services/notificationService');

// Load configuration based on environment
const config = configLoader();
logger.log(`Loaded configuration for environment: ${config.env}`);

// Connect to the database
connectDB();

module.exports = {
  cli,
  config,
  logger,
  notifyUser,
};