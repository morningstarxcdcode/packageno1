const fs = require('fs');
const path = require('path');

const getRandomQuote = (filePath) => {
  const quotes = fs.readFileSync(filePath, 'utf-8').split('\n');
  return quotes[Math.floor(Math.random() * quotes.length)];
};

const inspirationalQuotesPath = path.resolve(__dirname, '../quotes/inspirational-quotes.txt');
const programmingQuotesPath = path.resolve(__dirname, '../quotes/programming-quotes.txt');

console.log('Inspirational Quote:', getRandomQuote(inspirationalQuotesPath));
console.log('Programming Quote:', getRandomQuote(programmingQuotesPath));