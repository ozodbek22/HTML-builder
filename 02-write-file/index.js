const fs = require('node:fs');
const path = require('node:path');
const readline = require('node:readline');

const filePath = path.join(__dirname, 'new-text.txt');

const writeStream = fs.createWriteStream(filePath, { flags: 'a' });

const readLine = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log(
  'Enter the text you want to write to the file. Press Ctrl + C to exit.',
);

readLine.on('line', (input) => {
  if (input === 'exit') {
    readLine.close();
  } else {
    writeStream.write(input + '\n');
  }
});

process.on('SIGINT', () => {
  readLine.close();
});
