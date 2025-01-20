const fs = require('node:fs');
const path = require('node:path');

const filePath = path.join(__dirname, 'text.txt');

const readStream = fs.createReadStream(filePath, { encoding: 'utf8' });

readStream.on('data', (chunk) => {
  process.stdout.write(chunk);
});

readStream.on('error', (error) => {
  console.error('Error reading the file:', error.message);
});
