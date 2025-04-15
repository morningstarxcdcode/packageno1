// Middleware to check if the user is authenticated
const authMiddleware = (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(401).send('Unauthorized');
  }
  next();
};

module.exports = authMiddleware;

// Example usage in Express
// const express = require('express');
// const app = express();
// app.use(authMiddleware);
// app.get('/', (req, res) => res.send('Hello, authenticated user!'));