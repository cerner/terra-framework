const path = require('path');
const glob = require('glob');
const fs = require('fs');
const kebabCase = require('lodash.kebabcase');
const startCase = require('lodash.startcase');

// allow theme to specifiy the search pattern???

const repositoryName = JSON.parse(fs.readFileSync(path.resolve(process.cwd(), '..', '..', 'package.json'))).name;
const packagesPath = path.resolve(process.cwd(), '..', '..', 'packages');
const testSearchPath = path.join('test-examples', '*?(.jsx|.js)');
const searchPath = path.join(packagesPath, '*', 'lib', 'examples', `{*.site-page?(.jsx|.js),${testSearchPath}}`);

glob(searchPath, { nodir: true }, (er, foundFiles) => {
  const packageConfig = [];
  let exampleImports = '';
  let testImports = '';

  let currPkgConfig = {
    name: undefined,
    packageName: undefined,
    pages: [],
    tests: [],
    IUpages: [],
  };

  foundFiles.forEach((filePath) => {
    const parsedPath = path.parse(filePath);
    const directory = parsedPath.dir.split(path.sep);

    const isExampleFile = parsedPath.name.includes('.site-page');
    // filepath results in -anything-/packages/package-name/examples/(*.example||test-examples/*)
    const pkgPosition = isExampleFile ? 3 : 4;

    const fileName = parsedPath.name.replace('.site-page', '');
    const packageName = directory[directory.length - pkgPosition];
    const componentName = startCase(packageName.replace('terra-', ''));

    let importName;
    if (isExampleFile) {
      importName = `${startCase(packageName)}${fileName}`.replace(/\s/g, '');
      const importPath = path.join('..', '..', `${packageName}`, 'examples', `${fileName}.site-page`);
      exampleImports += `import ${importName} from '${importPath}';\n`;
    } else {
      importName = `${startCase(fileName)}`.replace(/\s/g, '');
      const importPath = path.join('..', '..', `${packageName}`, 'examples', 'test-examples', `${fileName}`);
      testImports += `import ${importName} from '${importPath}';\n`;
    }

    const fileConfig = {
      path: `'/${kebabCase(fileName)}'`,
      component: importName,
      description: `'${startCase(fileName)}',`,
    };

    const UIConfig = {
      name: fileName,
      url: `${path.join(process.argv.length > 2 ? `${process.argv[2]}` : 'http://engineering.cerner.com', `${repositoryName}`, 'raw', 'examples', `${kebabCase(packageName)}`, `${kebabCase(fileName)}`)}`,
    };

    if (packageName === currPkgConfig.packageName) {
      if (isExampleFile) {
        currPkgConfig.pages.push(fileConfig);
        currPkgConfig.UIpages.push(UIConfig);
      } else {
        currPkgConfig.tests.push(fileConfig);
      }
    } else {
      if (isExampleFile) {
        currPkgConfig = { name: componentName, packageName, pages: [fileConfig], tests: [], UIpages: [UIConfig] };
      } else {
        currPkgConfig = { name: componentName, packageName, pages: [], tests: [fileConfig], UIpages: [] };
      }
      packageConfig.push(currPkgConfig);
    }
  });

  const UIconfig = {};
  UIconfig[repositoryName] = {
    name: startCase(repositoryName),
    packages: [],
  };

  packageConfig.forEach((pkg) => {
    UIconfig[repositoryName].packages.push({ name: pkg.name, examples: pkg.UIpages });
  });

  // Write JSON file for terra-ui consumption
  fs.writeFileSync(path.join(process.cwd(), 'src', 'terra-ui-config.json'), JSON.stringify(UIconfig, null, 2));


  // update imports to be non-mac specific paths....?
  const componentConfig = {};
  packageConfig.forEach((pkg) => {
    const configInfo = {
      name: `'${pkg.name}'`,
      pagesRoot: `'/components/${kebabCase(pkg.name)}'`,
      pages: pkg.pages,
      testsRoot: `'/tests/${kebabCase(pkg.name)}'`,
      tests: pkg.tests,
    };
    componentConfig[`'${pkg.packageName}'`] = configInfo;
  });

  // // Generate configuration file for site consumption
  fs.readFile(path.join(__dirname, 'index.template'), 'utf8', (err, data) => {
    let newFileContent = data.replace('<example_imports>', exampleImports);
    newFileContent = newFileContent.replace('<test_imports>', testImports);

    // Replace double quotes with single quotes and add any missing trailing commas
    const configString = JSON.stringify(componentConfig, null, 2).replace(/"/g, '').replace(/}(?!,)/g, '},').replace(/](?!,)/g, '],');

    newFileContent = newFileContent.replace('<config>',
    `const componentConfig = ${configString.replace(/,$/, '')};`,
    );

    fs.writeFileSync(path.join(process.cwd(), 'src', 'generatedComponentConfig.js'), newFileContent);
  });
});
