const { greet, calculateSum } = require('../src/index');
const { isEmail } = require('../utils/validator');

console.log(greet('Developer'));
console.log('Sum:', calculateSum(10, 20));
console.log('Valid Email:', isEmail('test@example.com'));
console.log('Invalid Email:', isEmail('invalid-email'));