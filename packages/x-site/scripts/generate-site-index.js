const path = require('path');
const glob = require('glob');
const fs = require('fs');
const kebabCase = require('lodash.kebabcase');
const startCase = require('lodash.startcase');

const repositoryName = JSON.parse(fs.readFileSync(path.resolve(__dirname, '..', '..', 'package.json'))).name;

const packagePath = path.join(__dirname, '..', '..', 'packages');

glob(path.join(packagePath, '**', '*.example?(.jsx|.js)'), (er, files) => {
  const parsedFiles = {};
  parsedFiles[repositoryName] = {
    name: startCase(repositoryName),
    packages: [],
  };

  files.forEach((filePath) => {
    const parsedPath = path.parse(filePath);
    const parsedDirectory = parsedPath.dir.split(path.sep);

    const fileName = parsedPath.name.replace('.example', '');
    const packageName = parsedDirectory[parsedDirectory.length - 2];

    parsedFiles[repositoryName].packages.push({
      name: fileName,
      url: `${process.argv.length > 2 ? process.argv[2] : 'http://engineering.cerner.com'}/${repositoryName}/examples/${kebabCase(packageName)}/${kebabCase(fileName)}`,
    });
  });

  // Write JSON file for terra-ui consumption
  fs.writeFileSync(path.join(__dirname, '..', '..', 'site-examples.json'), JSON.stringify(parsedFiles, null, '  '));

  // Generate configuration file for site consumption
  fs.readFile(path.join(__dirname, 'indexTemplate.js'), 'utf8', (err, data) => {
    const newFile = data.concat('\n', `const output = ${JSON.stringify(parsedFiles, null, '  ')};`);
    fs.writeFileSync(path.join(__dirname, '..', '..', 'generatedIndex.js'), newFile);
  });
});
