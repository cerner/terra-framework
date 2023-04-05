const fs = require('fs-extra');
const path = require('path');
const ignore = require('ignore');
const spawn = require('@npmcli/promise-spawn');

const IGNORE_FILE_PATH = path.join(process.cwd(), '.packagejsonlintignore');

const getIgnorer = async () => {
  const ignoreFileContents = await fs.pathExists(IGNORE_FILE_PATH) ? await fs.readFile(IGNORE_FILE_PATH, 'utf8') : '';
  return ignore().add(ignoreFileContents);
};

const getPathsForRailsServer = () => [
  path.join(process.cwd(), 'package.json'),
  path.join(process.cwd(), 'client', 'package.json'),
];

const getPathsForMonoRepo = async () => {
  const { stdout } = await spawn('npx', ['lerna', 'ls', '-pa', '--loglevel=silent'], { stdioString: true });
  return [path.join(process.cwd(), 'package.json'), ...stdout.trim().split(/\r\n|\n\r|\n|\r/).map((projectPath) => path.join(projectPath, 'package.json'))];
};

const getCandidatePackageJsons = async () => {
  if (await fs.pathExists(path.join(process.cwd(), 'Gemfile'))) {
    return getPathsForRailsServer();
  }

  if (await fs.pathExists(path.join(process.cwd(), 'lerna.json'))) {
    return getPathsForMonoRepo();
  }
  return [path.join(process.cwd(), 'package.json')];
};

const getPathsForPackages = async () => {
  const paths = await getCandidatePackageJsons();
  const ignorer = await getIgnorer();
  return paths.filter(currentPath => !ignorer.ignores(path.relative(process.cwd(), currentPath)));
};

module.exports = {
  getPathsForPackages,
};
