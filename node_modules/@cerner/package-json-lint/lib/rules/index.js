const requireDependenciesDeclaredAtAppropriateLevel = require('./require-dependencies-declared-at-appropriate-level');
const requireIe10CompatibleDependencyVersions = require('./require-ie10-compatible-dependency-versions');
const requireNoHardCodedDependencyVersions = require('./require-no-hard-coded-dependency-versions');
const requireNoTerraBasePeerDependencyVersions = require('./require-no-terra-base-peer-dependency-versions');
const requireThemeContextVersions = require('./require-theme-context-versions');

module.exports = {
  'require-dependencies-declared-at-appropriate-level': requireDependenciesDeclaredAtAppropriateLevel,
  'require-ie10-compatible-dependency-versions': requireIe10CompatibleDependencyVersions,
  'require-no-hard-coded-dependency-versions': requireNoHardCodedDependencyVersions,
  'require-no-terra-base-peer-dependency-versions': requireNoTerraBasePeerDependencyVersions,
  'require-theme-context-versions': requireThemeContextVersions,
};
