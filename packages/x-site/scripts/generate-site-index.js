const path = require('path');
const glob = require('glob');
const fs = require('fs');
const kebabCase = require('lodash.kebabcase');
const startCase = require('lodash.startcase');

const repositoryName = JSON.parse(fs.readFileSync(path.resolve(__dirname, '..', '..', 'package.json'))).name;
const packagePath = path.join(__dirname, '..', '..', 'packages');

glob(path.join(packagePath, '*', 'lib', 'examples', '*.example?(.jsx|.js)'), (er, files) => {
  const parsedFiles = {};
  parsedFiles[repositoryName] = {
    name: startCase(repositoryName),
    packages: [],
  };

  console.log(files);

  files.forEach((filePath) => {
    const parsedPath = path.parse(filePath);
    const parsedDirectory = parsedPath.dir.split(path.sep);

    const fileName = parsedPath.name.replace('.example', '');
    const packageName = parsedDirectory[parsedDirectory.length - 3];

    parsedFiles[repositoryName].packages.push({
      name: fileName,
      packageName,
      path: filePath,
      url: `${process.argv.length > 2 ? process.argv[2] : 'http://engineering.cerner.com'}/${repositoryName}/raw/examples/${kebabCase(packageName)}/${kebabCase(fileName)}`,
    });
  });

  // Write JSON file for terra-ui consumption
  if (!fs.existsSync(path.join(__dirname, '..', '..', 'terra-ui-config'))) {
    fs.mkdir(path.join(__dirname, '..', '..', 'terra-ui-config'), () => {
      fs.writeFileSync(path.join(__dirname, '..', '..', 'terra-ui-config', 'configuration.json'), JSON.stringify(parsedFiles, null, '  '));
    });
  } else {
    fs.writeFileSync(path.join(__dirname, '..', '..', 'terra-ui-config', 'configuration.json'), JSON.stringify(parsedFiles, null, '  '));
  }

  console.log(parsedFiles);

  // Generate configuration file for site consumption
  fs.readFile(path.join(__dirname, 'index.template'), 'utf8', (err, data) => {
    let newFileContent = data.replace('<imports>', parsedFiles[repositoryName].packages.map((package) => {
      return `import ${package.name} from '${package.packageName}/lib/examples/${package.name}.example';`;
    }).join('\n'));

    let configString = `${parsedFiles[repositoryName].packages.map((package) => (
      `'${package.packageName}': {
        name: '${package.name}',
        example: {
          path: '/examples/${kebabCase(package.name)}',
          component: ${package.name},
          description: '${package.name}',
        },
      },`
    )).join(`\n`)}`;

    console.log(configString);

    newFileContent = newFileContent.replace('<config>',
      `const config = {
        ${configString}
      };`
    );

    // const newFile = data.concat('\n', `const output = ${JSON.stringify(parsedFiles, null, '  ')};`);
    fs.writeFileSync(path.join(__dirname, '..', '..', 'generatedIndex.js'), newFileContent);
  });
});
