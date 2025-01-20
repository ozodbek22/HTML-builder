const fs = require('node:fs/promises');
const path = require('node:path');

const folderPath = path.join(__dirname, 'secret-folder');

async function readFiles() {
  const files = await fs.readdir(folderPath, { withFileTypes: true });

  for (const file of files) {
    if (file.isFile()) {
      const filePath = path.join(folderPath, file.name);
      const infoData = await fs.stat(filePath);

      const fileName = path.parse(filePath).name;
      const fileExtension = path.extname(filePath).slice(1);

      console.log(`${fileName} - ${fileExtension} - ${infoData.size} bytes`);
    }
  }
}

readFiles();
