const fs = require('node:fs/promises');
const path = require('node:path');

async function mergeStyles() {
  const stylesFolder = path.join(__dirname, 'styles');
  const destinationFolder = path.join(__dirname, 'project-dist');

  const bundlingFile = path.join(destinationFolder, 'bundle.css');


    await fs.mkdir(destinationFolder, { recursive: true });

    const files = await fs.readdir(stylesFolder, { withFileTypes: true });

    const cssStyles= [];

    for (const file of files){

    }
}
