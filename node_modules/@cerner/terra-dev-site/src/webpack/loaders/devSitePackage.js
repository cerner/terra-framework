/**
 * Generate react components based off the package.json file
 * Don't use an arrow function
 * @param {*} content the json file
 */
const loader = async function loader(content) {
  const callback = this.async();

  const json = JSON.parse(content);
  const repoUrl = (json.repository && json.repository.url) ? (json.repository.url).match(/https.*[^.git]/i) : '';
  const repoDirectory = (json.repository && json.repository.directory) ? (json.repository.directory).match(/[^/].*/i) : '';
  let finalUrl = '';
  if (repoUrl) {
    if (repoDirectory) {
      finalUrl = `${repoUrl}/tree/main/${repoDirectory}`;
    } else {
      finalUrl = repoUrl;
    }
  }

  const badge = finalUrl ? (
    `<Badges
        src="${finalUrl}"
        name="${json.name}"
        version="${json.version}"
        url={url}
      />`
  ) : (
    `<Badges
        name="${json.name}"
        version="${json.version}"
        url={url}
      />`
  );

  const code = [
    'import React from \'react\';',
    'import Badges from \'@cerner/terra-dev-site/lib/loader-components/_Badges\';',
    '',
    `export const Badge = ({ url }) => (
      ${badge}
    );`,
  ].join('\n');

  return callback(null, code);
};

module.exports = loader;
