const path = require('path');
const glob = require('glob');
const fs = require('fs');
const AliasPlugin = require('enhanced-resolve/lib/AliasPlugin');
/**
 * Setup aliases for any packages found in the root directory globs.
 * This aliases the package name for the folder the package name resides in.
 * This allows for importing the package as if it was in the node modules folder.
 * {packageName: pathToFolder}
 */
class LocalPackageAliasPlugin {
  constructor({ rootDirectories = [process.cwd()] } = {}) {
    // Creates a structure like this for aliases, this is the expected structure for the alias plugin.
    // {
    //   name:'item/to/alias',
    //   onlyModule: false,
    //   alias:'/new/alias/name',
    // }
    this.alias = rootDirectories.reduce((acc, root) => acc.concat(glob.sync(`${root}/package.json`).map((rootPath) => {
      const dirname = path.dirname(rootPath);
      const packageName = JSON.parse(fs.readFileSync(rootPath)).name;
      return {
        name: packageName,
        onlyModule: false,
        alias: dirname,
      };
    })),
    []);
  }

  apply(resolver) {
    new AliasPlugin('described-resolve', this.alias, 'resolve').apply(resolver);
  }
}

module.exports = LocalPackageAliasPlugin;
