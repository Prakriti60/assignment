
const fs = require('fs');


function readFile(filename) {
  fs.readFile(filename, 'utf8', (err, data) => {
    if (err) {

      console.error(`Error reading file: ${err}`);
      return;
    }


    console.log(data);
  });
}


module.exports = readFile;

