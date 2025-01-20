const fs = require('node:fs/promises');
const path = require('node:path');

async function copyDirectory() {
  const sourceFolder = path.join(__dirname, 'files');
  const copyFolder = path.join(__dirname, 'files-copy');

  await fs.mkdir(copyFolder, { recursive: true });

  const items = await fs.readdir(sourceFolder, { withFileTypes: true });

  for (const item of items) {
    if (item.isFile()) {
      await fs.copyFile(
        path.join(sourceFolder, item.name),
        path.join(copyFolder, item.name),
      );
    }
  }
}

copyDirectory();
