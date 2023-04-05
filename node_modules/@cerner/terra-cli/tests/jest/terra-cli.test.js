const childProcess = require('child_process');
const path = require('path');
const { promisify } = require('util');

const exec = promisify(childProcess.exec);

describe('terra-cli', () => {
  it('returns the available commands for a non terra-toolkit project', async () => {
    const { stdout } = await exec('../../../../bin/terra --help', { cwd: path.join(__dirname, 'fixtures', 'normal-project') });
    expect(stdout).toMatchSnapshot();
  });

  it('returns the available commands for terra-toolkit by looking in the packages directory', async () => {
    const { stdout } = await exec('../../../../bin/terra --help', { cwd: path.join(__dirname, 'fixtures', 'terra-toolkit-project') });
    expect(stdout).toMatchSnapshot();
  });
});
