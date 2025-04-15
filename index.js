const axios = require('axios');
const _ = require('lodash');

console.log("Welcome to the most advanced package ever built!");

module.exports = {
  fetchData: async (url) => {
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  },
  processArray: (arr) => {
    return _.uniq(arr);
  }
};