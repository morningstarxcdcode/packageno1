const fs = require('fs');
const path = require('path');

const setup = () => {
  const envPath = path.resolve(__dirname, '../.env');
  if (!fs.existsSync(envPath)) {
    fs.writeFileSync(envPath, 'NODE_ENV=development\n');
    console.log('Created .env file with default settings.');
  }
};

setup();