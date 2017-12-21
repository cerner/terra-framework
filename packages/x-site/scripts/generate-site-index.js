const path = require('path');
const glob = require('glob');
const fs = require('fs');
const kebabCase = require('lodash.kebabcase');
const startCase = require('lodash.startcase');

const repositoryName = JSON.parse(fs.readFileSync(path.resolve(process.cwd(), '..', '..', 'package.json'))).name;
const packagePath = path.resolve(process.cwd(), '..', '..', 'packages');
const searchPath = path.join(packagePath, '*', 'lib', 'examples', '*.example?(.jsx|.js)');

glob(searchPath, (er, files) => {
  const parsedFiles = {};
  parsedFiles[repositoryName] = {
    name: startCase(repositoryName),
    packages: [],
  };

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
  fs.writeFileSync(path.join(process.cwd(), 'terra-ui-config.json'), JSON.stringify(parsedFiles, null, '  '));

  console.log(parsedFiles);

  // Generate configuration file for site consumption
  fs.readFile(path.join(__dirname, 'index.template'), 'utf8', (err, data) => {
    let newFileContent = data.replace('<imports>', parsedFiles[repositoryName].packages.map((pkg) => {
      const importName = `${startCase(pkg.packageName)}${pkg.name}`.replace(/\s/g, '');

      return `import ${importName} from '${pkg.packageName}/lib/examples/${pkg.name}.example';`;
    }).join('\n'));

    const configString = `${parsedFiles[repositoryName].packages.map((pkg) => {
      const importName = `${startCase(pkg.packageName)}${pkg.name}`.replace(/\s/g, '');

      return `'${pkg.packageName}': {
        name: '${pkg.name}',
        example: {
          path: '/examples/${kebabCase(pkg.name)}',
          component: ${importName},
          description: '${pkg.name}',
        },
      },`;
    }).join('\n')}`;

    console.log(configString);

    newFileContent = newFileContent.replace('<config>',
      `const config = {
        ${configString}
      };`,
    );

    // const newFile = data.concat('\n', `const output = ${JSON.stringify(parsedFiles, null, '  ')};`);
    fs.writeFileSync(path.join(process.cwd(), 'generatedIndex.js'), newFileContent);
  });
});
