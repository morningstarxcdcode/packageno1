const { hashPassword, comparePassword } = require('../utils/hash');

const createUser = async (userData) => {
  const hashedPassword = await hashPassword(userData.password);
  return { ...userData, password: hashedPassword };
};

const verifyUser = async (userData, password) => {
  return await comparePassword(password, userData.password);
};

module.exports = { createUser, verifyUser };