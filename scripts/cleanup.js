const fs = require('fs');
const path = require('path');

const cleanup = () => {
  const distPath = path.resolve(__dirname, '../dist');
  if (fs.existsSync(distPath)) {
    fs.rmSync(distPath, { recursive: true });
    console.log('Cleaned up dist folder.');
  }
};

cleanup();