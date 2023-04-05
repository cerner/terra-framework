const path = require('path');

module.exports = (filePath, resolveExtensions = []) => {
  const modifiedPath = filePath.replace('/lib/', '/src/');
  const parsedResourcePath = path.parse(modifiedPath);
  let source = modifiedPath;
  // If the extension is resolveable by webpack, remove it.
  if (resolveExtensions.includes(parsedResourcePath.ext)) {
    source = path.join(parsedResourcePath.dir, parsedResourcePath.name);
  }
  return {
    filePath: modifiedPath,
    source,
    name: parsedResourcePath.name,
    // remove . from extension;
    extension: parsedResourcePath.ext.slice(1),
  };
};
