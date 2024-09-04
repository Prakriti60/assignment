
const fs = require('fs');


function writeFile(filename, data) {
  fs.writeFile(filename, data, (err) => {
    if (err) {

      console.error(`Error writing to file: ${err}`);
      return;
    }

    console.log(`Data written to ${filename}`);
  });
}


module.exports = writeFile;