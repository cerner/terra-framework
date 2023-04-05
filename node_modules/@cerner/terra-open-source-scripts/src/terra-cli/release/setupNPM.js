const path = require('path');
const fs = require('fs-extra');

module.exports = async () => {
  await fs.writeFile(path.join(process.env.HOME, '.npmrc'), `//registry.npmjs.org/:_authToken=${process.env.NPM_TOKEN}`, 'utf-8');
};
