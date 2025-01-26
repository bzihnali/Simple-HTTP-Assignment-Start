const fs = require('fs'); // pull in the file system module

console.log(`${__dirname}/../client/spongegar.png`)
const spongegar = fs.readFileSync(`${__dirname}/../client/spongegar.png`);

const getSpongegar = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'image/png' });
  response.write(spongegar);
  response.end();
};

module.exports = {
  getSpongegar
};
